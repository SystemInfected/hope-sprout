import AcademyHeader from '@/content/academy/header.mdx'
import AcademyContent from '@/content/academy/content.mdx'

const Academy = async () => {
	return (
		<>
			<div
				id='image-container'
				className='min-h-screen bg-[url("./content/academy/image.jpg")] bg-cover bg-fixed bg-center'
			>
				<div className='full-w-container min-h-screen bg-primary-950 bg-opacity-40'>
					<section className='max-w-container flex flex-col items-center justify-center text-center text-primary-100 md:px-24'>
						<AcademyHeader />
					</section>
				</div>
			</div>
			<div className='full-w-container py-16 text-primary-950'>
				<section className='max-w-container flex justify-center text-center'>
					<div className='max-w-lg'>
						<AcademyContent />
					</div>
				</section>
			</div>
		</>
	)
}

export default Academy
