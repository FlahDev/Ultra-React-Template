// libs
import { Routes, Route } from 'react-router-dom'

// pages
import { Page1 } from 'pages/test'

import { RoutesMap } from './routes.map'

function ApplicationRoutes() {
	return (
		<Routes>
			<Route path={RoutesMap.page1} element={<Page1 />} />
		</Routes>
	)
}

export { ApplicationRoutes }
