import { lightColors, darkColors } from './colors'
import { sizes } from './sizes'
import { typography } from './typography'

export const Theme = {
	isLight: false,

	light: {
		colors: lightColors,
		sizes,
		typography,
	},
	dark: {
		colors: darkColors,
		sizes,
		typography,
	},
}

// export default Theme
