type listNav = {
	label: string
	link: string
}

import imgLogo from "../../../public/dev.png"

export const Header = () => {
	const listNav: listNav[] = [
		{
			label: 'Projetos',
			link: '/projetos'
		},
		{
			label: 'Contato',
			link: '/contato'
		}
	]

	return <header
		className="w-full border-b-2 text-xl"
	>
		<div
			className=
			"container mx-auto flex w-full justify-between items-center py-5"
		>
			<h1>
				<a
					className="flex gap-3 items-center hover:underline"
					href="/"
				>
					<img src={imgLogo} />
					Eduardo Lima
				</a>
			</h1>
			<nav>
				<ul
					className="flex gap-3 text-lg"
				>
					{listNav.map(item =>
						<li>
							<a href={item.link}>
								{item.label}
							</a>
						</li>
					)}
				</ul>
			</nav>
			<div />
		</div>
	</header>
}
