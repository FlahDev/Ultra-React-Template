export interface ColorsMap {
	// primary
	primary: string
	primaryLighter: string
	primaryDarker: string
	// secondary
	secondary: string
	secondaryLighter: string
	secondaryDarker: string
	// commons
	black: string
	white: string
	success: string
	error: string
	text: string
	// greys
	grey: string
	disabled: string
	placeholder: string
}

export type ColorsOptions = keyof ColorsMap & string
