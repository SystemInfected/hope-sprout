import { Metadata } from 'next'
import ContactHeader from '@/content/kontakt/header.mdx'
import ContactContent from '@/content/kontakt/content.mdx'
import metaData from '@/content/kontakt/metadata.json'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
	...metaData,
}

const Contact = async () => {
	return (
		<>
			<div
				id='image-container'
				className='min-h-screen bg-[url("./content/kontakt/image.jpg")] bg-cover bg-fixed bg-center'
			>
				<div className='full-w-container min-h-screen bg-primary-950 bg-opacity-40'>
					<section className='max-w-container flex flex-col items-center justify-center text-center text-primary-100 md:px-24'>
						<ContactHeader />
					</section>
				</div>
			</div>
			<div className='full-w-container py-16 text-primary-950'>
				<section className='max-w-container flex justify-center text-center'>
					<div className='max-w-lg'>
						<ContactContent />
					</div>
				</section>
			</div>
			<ContactForm />
		</>
	)
}

export default Contact
