/*
 * Email obfuscation (vulnerability-audit recommendation):
 * The contact address is split into fragments here so the full token never
 * appears as a plain string in the served HTML or bundle source, reducing
 * exposure to naive email harvesters. At runtime the parts are joined into a
 * normal mailto: href and rendered text, so human visitors are unaffected.
 */
export const EMAIL_PARTS = ["damilola", ".samsonajai", "@", "gmail.com"];

export const EMAIL_ADDRESS = EMAIL_PARTS.join("");
export const EMAIL_HREF = `mailto:${EMAIL_ADDRESS}`;
