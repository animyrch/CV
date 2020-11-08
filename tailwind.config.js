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
				'26': '7.5rem', // this
        		'-26': '-7.5rem',
				'65': '16.5rem', // this
        		'-65': '-16.5rem',
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
				'-120': '-30rem',
				'121': '31rem',
				'-121': '-31rem', // this
				'124': '36rem',
				'-124': '-36rem',
				'128': '42rem',
				'-128': '-42rem',
				'130': '45rem',
				'-130': '-45rem', //this
				'132': '48rem',
				'-132': '-48rem'
			},
			backgroundImage: {
				'menu-back': "url('/src/assets/menuback.png')",
				'menu-indicator': "url('/src/assets/pageIndicator.png')"
			}
		}
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}
