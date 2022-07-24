// libs
import { DefaultChildren } from 'react'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter as RouterProvider } from 'react-router-dom'

import { MuiTheme } from './theme/mui'

function GlobalProviders({ children }: DefaultChildren) {
	return (
		<RouterProvider>
			<ThemeProvider theme={MuiTheme}>{children}</ThemeProvider>
		</RouterProvider>
	)
}

export { GlobalProviders }
