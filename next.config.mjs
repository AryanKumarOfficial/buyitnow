/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: ""
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: ""
            },
            {
                protocol: 'http',
                hostname: 'res.cloudinary.com',
                port: ""
            }
        ]
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                ],
            },
        ];
    },
    env: {
        MONGO_URI: 'mongodb://localhost:27017/buyitnow',
        NEXT_APP_API_URL: 'http://localhost:3000',
    },
};

export default nextConfig;
