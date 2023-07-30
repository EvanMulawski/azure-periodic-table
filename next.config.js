/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        loader: "imgix",
        path: "https://onwardplatforms.github.io",
    },
    assetPrefix: "/azure-periodic-table/",
}

module.exports = nextConfig
