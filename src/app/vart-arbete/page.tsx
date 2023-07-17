import OurWorkHeader from '@/content/vart-arbete/header.mdx'
import OurWorkContent from '@/content/vart-arbete/content.mdx'

const OurWork = async () => {
	return (
		<>
			<div
				id='image-container'
				className='min-h-screen bg-[url("./content/vart-arbete/image.jpg")] bg-cover bg-fixed bg-center'
			>
				<div className='full-w-container min-h-screen bg-primary-950 bg-opacity-40'>
					<section className='max-w-container flex flex-col items-center justify-center text-center text-primary-100 md:px-24'>
						<OurWorkHeader />
					</section>
				</div>
			</div>
			<div className='full-w-container py-16 text-primary-950'>
				<section className='max-w-container flex justify-center text-center'>
					<div className='max-w-lg'>
						<OurWorkContent />
					</div>
				</section>
			</div>
		</>
	)
}

export default OurWork
