import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { ThemeProvider } from './shadcn-ui/components/theme-provider'
// Import the generated route tree
import { routeTree } from './routeTree.gen'

import './reset.css'
import './index.css'

// Create a new router instance
const router = createRouter({ routeTree })
// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="site-theme">
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
)
