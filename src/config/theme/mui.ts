import { createTheme } from '@mui/material'

import { ColorsController, FontsSettings } from './config'

export const MuiTheme = createTheme({
	palette: {
		primary: {
			main: ColorsController.colors.primary,
			light: ColorsController.colors.primaryLighter,
			dark: ColorsController.colors.primaryDarker,
		},
		secondary: {
			main: ColorsController.colors.secondary,
			light: ColorsController.colors.secondaryLighter,
			dark: ColorsController.colors.secondaryDarker,
		},
		text: {
			primary: ColorsController.colors.text,
			disabled: ColorsController.colors.grey,
		},
		common: {
			black: ColorsController.colors.black,
			white: ColorsController.colors.white,
		},
		error: {
			main: ColorsController.colors.error,
		},
		success: {
			main: ColorsController.colors.success,
		},
	},
	typography: {
		fontFamily: FontsSettings.family,
		fontSize: FontsSettings.size,
		allVariants: {
			color: ColorsController.colors.text,
		},
	},
})
