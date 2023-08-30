// This file contains the site configuration for the theme.

// Metadata, SEO, and Social
export const SITE_TITLE = "Confuscript"
export const SITE_DESCRIPTION = "A modern scripting language to confuse programmers."
export const SITE_URL = "https://keshavbiswa.com/confuscript"
export const SITE_DEFAULT_OG_IMAGE = "/assets/og-image.png"

// Docs Sidebar
// Define the left sidebar items here.
// The path should match the folder name in src/content/docs/
export const SIDEBAR_ITEMS = {
  "Get Started": [
    "/docs/get-started/introduction",
    "/docs/get-started/installation",
  ],
  "Documentation": [
    "/docs/documentation/introduction",
    "/docs/documentation/io",
    "/docs/documentation/variables-and-data-types",
    "/docs/documentation/operators",
    "/docs/documentation/conditional-statements",
    "/docs/documentation/loops",
    "/docs/documentation/functions",
    "/docs/documentation/comments",
  ],
  "Tutorials": [
    "/docs/tutorials/factorials",
    "/docs/tutorials/palindrome",
  ],
}
