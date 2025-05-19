// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      },
    ],
  },
  typescript: {
    // !! UYARI !!
    // TypeScript hataları görmezden gelinerek build işlemi gerçekleştirilecek
    // Gerçek bir projede bu ayar sadece geçici bir çözüm olarak kullanılmalıdır
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
