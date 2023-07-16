import Link from 'next/link'
import React from 'react'
import MenuIcon from '../components/MenuIcon'

const mainNavigation = [
	{ title: 'Om oss', link: '/' },
	{ title: 'Vårt arbete', link: '/' },
	{ title: 'Kontakta oss', link: '/' },
]

const Navigation = () => {
	return (
		<div className='full-w-container fixed z-50 bg-primary-100 text-primary-950 py-6-safe'>
			<div className='max-w-container flex items-center justify-between'>
				<Link href='/' className='text-lg font-bold'>
					HopeSprout
				</Link>
				<nav className='hidden items-center justify-end gap-6 text-sm uppercase tracking-widest sm:flex'>
					{mainNavigation.map((nav, index) => (
						<Link
							className='decoration-2 underline-offset-4 hover:underline'
							key={`link_${index}`}
							href={nav.link}
						>
							{nav.title}
						</Link>
					))}
				</nav>
				<nav className='flex items-center justify-end sm:hidden'>
					<MenuIcon />
				</nav>
			</div>
		</div>
	)
}

export default Navigation
