module.exports = {
    important: true,
	purge: [
	    './src/**/*.html',
	    './src/**/*.vue',
		'./src/**/*.jsx',
		'./src/**/*.js'
	],
    theme: {
		extend: {
			lineHeight: {
				'tight': '1.15'
			}
		}
    },
    variants: {
      opacity: ['responsive', 'hover']
    }
  }
