/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        loader: "imgix",
        path: "https://onwardplatforms.github.io",
    },
    assetPrefix: "./"
}

module.exports = nextConfig
