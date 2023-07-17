'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MenuIcon from '../components/MenuIcon'
import Logo from '../components/Logo'

const mainNavigation = [
	{ title: 'Om oss', link: '/' },
	{ title: 'Vårt arbete', link: '/vart-arbete' },
	{ title: 'HopeSprout Academy', link: '/academy' },
	{ title: 'Kontakta oss', link: '/kontakt' },
]

const Navigation = () => {
	const [reverseColor, setReverseColor] = useState(true)

	const pathName = usePathname()

	useEffect(() => {
		setReverseColor(true)
		const imageContainers = document.querySelectorAll('#image-container')
		const navContainer = document.querySelector('#nav-container')

		if (window && imageContainers.length && navContainer) {
			const navContainerRect = navContainer.getBoundingClientRect()

			const onScroll = () => {
				const isNavbarOverImage = Array.from(imageContainers).some(
					(imageContainer) => {
						const imageContainerRect = imageContainer.getBoundingClientRect()

						return (
							imageContainerRect.y - navContainerRect.height / 2 <= 0 &&
							imageContainerRect.y +
								(imageContainerRect.height - navContainerRect.height / 2) >
								0
						)
					}
				)

				setReverseColor(isNavbarOverImage)
			}

			window.removeEventListener('scroll', onScroll)
			window.addEventListener('scroll', onScroll, { passive: true })

			return () => window.removeEventListener('scroll', onScroll)
		}
	}, [pathName])

	return (
		<div
			id='nav-container'
			className={`full-w-container fixed z-50 py-6-safe ${
				reverseColor
					? 'bg-transparent text-primary-100 shadow-none'
					: 'bg-primary-100 text-primary-950 shadow'
			} transition-[color,background-color,box-shadow] duration-300`}
		>
			<div className='max-w-container flex items-center justify-between'>
				<Link href='/' className='flex gap-2 text-lg font-bold'>
					<Logo />
					HopeSprout
				</Link>
				<nav className='display-none items-center justify-end gap-6 text-sm uppercase tracking-widest md:flex'>
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
				<nav className='md:display-none flex items-center justify-end'>
					<MenuIcon />
				</nav>
			</div>
		</div>
	)
}

export default Navigation
