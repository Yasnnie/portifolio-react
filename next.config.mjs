/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Deterministic class names, so server and client render the same markup.
    styledComponents: true,
  },
  // One URL per language: "/" is Portuguese, "/en" is English. Each is
  // rendered on the server in its own language, so crawlers see real content.
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
  },
}

export default nextConfig
