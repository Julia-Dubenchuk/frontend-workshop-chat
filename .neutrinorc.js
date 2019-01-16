module.exports = {
	use: [
		['@atomspace/eslint', {
			eslint: {
				envs: ['browser']
			}
		}],
		['@neutrinojs/web', {
			html: {
				template: './src/index.html',
				inject: true
			},
			devServer: {
				open: false
			}
		}],
		'@neutrinojs/jest'
	]
} 