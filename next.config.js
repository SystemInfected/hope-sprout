/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		mdxRs: true,
	},
	reactStrictMode: true,
	swcMinify: true,

	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				fs: false,
			}
		}

		return config
	},
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
