// libs
import { DefaultChildren } from 'react'
import { CssBaseline } from '@mui/material'

import { GlobalProviders } from './providers'

function Application({ children }: DefaultChildren) {
	return (
		<GlobalProviders>
			<CssBaseline />
			{children}
		</GlobalProviders>
	)
}

export { Application }
