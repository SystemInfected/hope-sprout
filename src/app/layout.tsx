import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navigation from './layout/Navigation'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['200', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'HopeSprout',
	description: 'HopeSprout',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Navigation />
				{children}
			</body>
		</html>
	)
}
