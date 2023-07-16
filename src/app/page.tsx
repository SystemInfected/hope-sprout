import OmOssHeader from './content/om-oss/header.mdx'
import OmOssContent from './content/om-oss/content.mdx'

const Home = async () => {
	return (
		<>
			<div
				id='hero-container'
				className='min-h-screen bg-[url("./content/om-oss/image.jpeg")] bg-cover bg-center'
			>
				<div className='full-w-container min-h-screen bg-primary-950 bg-opacity-30 pt-32'>
					<section className='max-w-container flex justify-center pt-32 text-center text-primary-100 md:px-24'>
						<OmOssHeader />
					</section>
				</div>
			</div>
			<div className='full-w-container pt-16 text-primary-950'>
				<section className='max-w-container flex justify-center text-center text-sm'>
					<div className='max-w-md'>
						<OmOssContent />
					</div>
				</section>
			</div>
		</>
	)
}

export default Home
