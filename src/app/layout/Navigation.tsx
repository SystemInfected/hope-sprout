'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import MenuIcon from '../components/MenuIcon'

const mainNavigation = [
	{ title: 'Om oss', link: '/' },
	{ title: 'Vårt arbete', link: '/' },
	{ title: 'Kontakta oss', link: '/' },
]

const Navigation = () => {
	const [reverseColor, setReverseColor] = useState(true)

	useEffect(() => {
		const heroContainer = document.querySelector('#hero-container')
		const navContainer = document.querySelector('#nav-container')

		if (window && heroContainer && navContainer) {
			const navContainerRect = navContainer.getBoundingClientRect()

			const onScroll = () => {
				const heroContainerRect = heroContainer.getBoundingClientRect()
				setReverseColor(
					Math.abs(heroContainerRect.y) <
						heroContainerRect.height - navContainerRect.height
				)
			}

			window.removeEventListener('scroll', onScroll)
			window.addEventListener('scroll', onScroll, { passive: true })

			return () => window.removeEventListener('scroll', onScroll)
		}
	}, [])

	return (
		<div
			id='nav-container'
			className={`full-w-container fixed z-50 py-6-safe ${
				reverseColor
					? 'bg-transparent text-primary-100'
					: 'bg-primary-100 text-primary-950'
			}`}
		>
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
