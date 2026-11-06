import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	experimental: {
		agentFeedback: true,
		globalNotFound: true,
	},
	turbopack: {
		rules: {
			"*.css": {
				loaders: ["@tailwindcss/turbopack"],
				as: "*.css",
			},
		},
	},
	assetPrefix: "./",
};

export default nextConfig;
