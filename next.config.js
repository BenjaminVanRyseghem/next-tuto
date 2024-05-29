const { resolve } = require("node:path");
/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	webpack: (
		config,
	) => {
		config.module.rules.push({
			test: /page.[jt]sx$/,
			loader: resolve("./page-loader.mjs"),

		});
		return config
	},
};

module.exports = nextConfig;
