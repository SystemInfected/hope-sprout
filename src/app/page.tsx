import Image from 'next/image'

import OmOssHeader from './content/om-oss/header.mdx'
import OmOssContent from './content/om-oss/content.mdx'

const Home = async () => {
	return (
		<>
			<div className='min-h-screen bg-[url("./content/om-oss/image.jpeg")] bg-cover bg-center'>
				<div className='full-w-container min-h-screen bg-primary-950 bg-opacity-30 pt-32'>
					<section className='max-w-container flex justify-center pt-32 text-center text-3xl text-primary-100 sm:text-4xl md:px-24 md:text-5xl'>
						<OmOssHeader />
					</section>
				</div>
			</div>
			<div className='full-w-container pt-16 text-primary-950'>
				<section className='max-w-container text-center'>
					<OmOssContent />
				</section>
			</div>
		</>
	)
}

export default Home
