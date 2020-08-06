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
			},
			margin: {
				'72': '18rem',
        '-72': '-18rem',
				'80': '20rem',
				'-80': '-20rem',
				'88': '22rem',
				'-88': '-22rem',
				'92': '23rem',
				'-92': '-23rem',
				'96': '24rem',
				'-96': '-24rem',
        '120': '30rem',
        '-120': '-30rem'
			}
		}
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}
