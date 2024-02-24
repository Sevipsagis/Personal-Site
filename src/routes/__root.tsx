import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
	component: () => (
		<div className="w-dvw h-dvh overflow-x-hidden overflow-y-auto">
			<div className="max-w-screen-md m-auto p-4">
				<header className="w-full sticky top-0 pt-4 pb-10 flex justify-center items-center bg-[hsl(var(--background))]">
					<div className="flex-auto basis-0">aaaa</div>
					<nav className="flex-auto basis-0 flex justify-end items-center">
						<div className="ml-6">bbbb</div>
						<div className="ml-6">bbbb</div>
						<div className="ml-6">bbbb</div>
						<div className="ml-6">bbbb</div>
					</nav>
				</header>
				<Outlet />
				<footer className="w-full fixed bottom-0 bg-[hsl(var(--background))] py-4">
					cccc
				</footer>
			</div>
		</div>
	)
})
