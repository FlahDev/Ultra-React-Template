import { ReactNode } from 'react'

declare module 'react' {
	export interface DefaultChildren {
		children: ReactNode
	}
}
