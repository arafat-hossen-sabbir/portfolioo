/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // এটা add করতে হবে
  images: {
    unoptimized: true, // static export এর জন্য দরকার
    domains: [],
  },
};

export default nextConfig;
