import React from 'react'
import ReactDOM from 'react-dom/client'

import { Application } from 'config/index'
import { ApplicationRoutes } from 'routes/switch'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Application>
			<ApplicationRoutes />
		</Application>
	</React.StrictMode>
)
