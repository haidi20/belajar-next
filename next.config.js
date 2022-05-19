/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "links.papareact.com",
            "platform-lookaside.fbsbx.com",
            "firebasestorage.googleapis.com",
        ]
    },
    env: {
        NEXT_BASE_API_URL: process.env.NEXT_BASE_API_URL,
        NEXT_API_KEY: process.env.NEXT_API_KEY,
    }
}

module.exports = nextConfig