const exportNameRegex = /export\s+default\s+(async)?\s*function\s+(\w+)/

export default function (source) {
	let exportName = source.match(exportNameRegex)[2];
	let appIndex = this.resourcePath.lastIndexOf('app');
	let lastSlash = this.resourcePath.lastIndexOf('/');
	let path = this.resourcePath.slice(appIndex+"app".length, lastSlash);

	return source + `

;${exportName}.meta={dir: "${path}"};`;
}
