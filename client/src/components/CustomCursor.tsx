/*
 * INK & EMBER — custom circular cursor with magnetism over links and
 * project cards. Desktop only; hidden on touch devices.
 */
import { useEffect, useRef, useState } from "react";

interface CursorState {
  x: number;
  y: number;
  hovering: boolean;
  overProject: boolean;
  magnetX: number;
  magnetY: number;
}

export function useCursorTargets() {
  const [hovering, setHovering] = useState(false);
  const [overProject, setOverProject] = useState(false);

  useEffect(() => {
    const onOver = (e: Event) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(
        "a[href], button, [data-cursor='magnet']",
      );
      if (el) {
        setHovering(true);
        setOverProject(el.hasAttribute("data-cursor-project"));
      }
    };
    const onOut = () => {
      setHovering(false);
      setOverProject(false);
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return { hovering, overProject };
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const overProject = useRef(false);
  const raf = useRef<number>(0);
  const reduced = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hide = () =>
      mq.matches || window.innerWidth < 768;
    reduced.current = mq.matches;

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (!hovering.current) {
        ring.current.x = e.clientX;
        ring.current.y = e.clientY;
      }
    };

    const onOver = (e: Event) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(
        "a[href], button, [data-cursor='magnet']",
      );
      if (el) {
        hovering.current = true;
        overProject.current = el.hasAttribute("data-cursor-project");
        // magnetic pull toward link center
        const r = el.getBoundingClientRect();
        ring.current.x = r.left + r.width / 2;
        ring.current.y = r.top + r.height / 2;
      }
    };
    const onOut = () => {
      hovering.current = false;
      overProject.current = false;
      ring.current.x = pos.current.x;
      ring.current.y = pos.current.y;
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    const tick = () => {
      const { x, y } = pos.current;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
      }
      if (cursorRef.current && !reduced.current) {
        const ease = hovering.current ? 0.22 : 0.16;
        ring.current.x += (x - ring.current.x) * ease;
        ring.current.y += (y - ring.current.y) * ease;
        const size = overProject.current ? 72 : hovering.current ? 44 : 32;
        cursorRef.current.style.transform = `translate3d(${ring.current.x - size / 2}px, ${ring.current.y - size / 2}px, 0) scale(${size / (hovering.current ? 44 : 32)})`;
        cursorRef.current.style.opacity = "1";
      } else if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block" aria-hidden="true">
      <div
        ref={cursorRef}
        className="absolute left-0 top-0 h-8 w-8 rounded-full border border-[var(--ember)]/70 mix-blend-difference transition-[background-color] duration-200"
        style={{ willChange: "transform", opacity: 0 }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-[var(--ember)]"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
