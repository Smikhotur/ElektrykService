/** @type {import('next').NextConfig} */
const isGhPages = process.env.GH_PAGES === 'true';
const repo = 'ElektrykService'; // точна назва репо (з урахуванням регістру)

const nextConfig = {
  reactStrictMode: true,
  output: 'export',            // генерує /out
  basePath: isGhPages ? `/${repo}` : '',
  assetPrefix: isGhPages ? `/${repo}/` : '',
  trailingSlash: true,

  images: {
    unoptimized: true,
    // заміна deprecated images.domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // (не додаємо тут webpack(), щоб не конфліктувати з Turbopack)
  // Якщо колись захочеш повернути Turbopack, просто прибереш прапор --webpack зі скрипта нижче
};

export default nextConfig;
