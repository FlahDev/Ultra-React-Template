import { ColorsMap } from './types'

export class ColorsController {
	private static currentTheme: 'WHITE' | 'DARK' = 'WHITE'

	private static whiteTheme: ColorsMap = {
		// primary
		primary: '#ff5722',
		primaryLighter: '#ff784e',
		primaryDarker: '#b23c17',
		// secondary
		secondary: '#2979ff',
		secondaryLighter: '#5393ff',
		secondaryDarker: '#1c54b2',
		// commons
		black: '#000000',
		white: '#ffffff',
		success: '#009944',
		error: '#cf000f',
		text: '#525252',
		// greys
		grey: '#e9e9e9',
		disabled: '#dfdfdf',
		placeholder: '#cccccc',
	}

	public static colors: ColorsMap = this.whiteTheme

	public static useWhiteTheme = () => {
		this.currentTheme = 'WHITE'
		this.colors = this.whiteTheme
	}

	public static useDarkTheme = () => {
		this.currentTheme = 'DARK'
	}

	public static getCurrentTheme = () => {
		return this.currentTheme
	}
}

export const FontsSettings = {
	family: 'Inter',
	size: 16,
	weight: 400,
}
