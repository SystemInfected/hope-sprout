'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Props {
	startPage?: boolean
}

const ContactForm = ({ startPage }: Props) => {
	const [mailData, setMailData] = useState({
		name: '',
		phone: '',
		email: '',
		message: '',
		sent: false,
		sending: false,
		buttonText: 'Skicka meddelande',
	})

	const notification = (message: string) => {
		if (message === 'success') {
			toast.success(
				'Tack för ditt meddelande, vi återkommer till dig så snart som möjligt.',
				{
					position: toast.POSITION.BOTTOM_CENTER,
				}
			)
		} else if (message === 'fail') {
			toast.error('Åh nej! Något gick fel, var vänlig försök igen.', {
				position: toast.POSITION.BOTTOM_CENTER,
			})
		}
	}

	const resetForm = () => {
		setMailData({
			name: '',
			phone: '',
			email: '',
			message: '',
			sent: false,
			sending: false,
			buttonText: 'Skicka meddelande',
		})
	}

	const submitForm = (e: React.FormEvent) => {
		e.preventDefault()
		setMailData((mailData) => ({
			...mailData,
			buttonText: 'Skickar...',
			sending: true,
		}))

		const data = {
			name: mailData.name,
			phone: mailData.phone,
			email: mailData.email,
			message: mailData.message,
		}

		axios
			.post('/api/contact', data)
			.then((res) => {
				if (res.status === 200) {
					setMailData((mailData) => ({ ...mailData, sent: true }))
					notification('success')
					resetForm()
				} else {
					setMailData((mailData) => ({
						...mailData,
						sending: false,
						buttonText: 'Skicka meddelande',
					}))
					notification('fail')
					console.error('Message not sent')
					console.error(e)
				}
			})
			.catch((e) => {
				setMailData((mailData) => ({
					...mailData,
					sending: false,
					buttonText: 'Skicka meddelande',
				}))
				notification('fail')
				console.error('Message not sent')
				console.error(e)
			})
	}

	return (
		<>
			{startPage && <h4 className='mb-0 text-center'>Kontakta oss</h4>}
			<div
				className={`full-w-container ${
					startPage ? 'py-16' : 'pb-16'
				} text-primary-950`}
			>
				<form
					autoComplete='off'
					onSubmit={(e) => submitForm(e)}
					className='max-w-container flex flex-col gap-6'
				>
					<div className='flex w-full flex-col gap-6 md:flex-row'>
						<div className='w-full'>
							<label htmlFor='name'>Namn</label>
							<input
								type='text'
								name='name'
								id='name'
								placeholder='Ditt namn'
								value={mailData.name}
								onChange={(e) =>
									setMailData((mailData) => ({
										...mailData,
										name: e.target.value,
									}))
								}
							/>
						</div>
						<div className='w-full'>
							<label htmlFor='phone'>Telefonnummer</label>
							<input
								type='number'
								name='phone'
								id='phone'
								placeholder='Ditt telefonnummer'
								value={mailData.phone}
								onChange={(e) =>
									setMailData((mailData) => ({
										...mailData,
										phone: e.target.value,
									}))
								}
							/>
						</div>
						<div className='w-full'>
							<label htmlFor='email'>E-post</label>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='Din e-postadress'
								value={mailData.email}
								onChange={(e) =>
									setMailData((mailData) => ({
										...mailData,
										email: e.target.value,
									}))
								}
								required
							/>
						</div>
					</div>
					<div className='w-full'>
						<label htmlFor='message'>Meddelande</label>
						<textarea
							className='h-24'
							name='message'
							id='message'
							placeholder='Ditt meddelande'
							value={mailData.message}
							onChange={(e) =>
								setMailData((mailData) => ({
									...mailData,
									message: e.target.value,
								}))
							}
							required
						/>
					</div>
					<button
						className='w-max flex-grow-0 rounded-full bg-primary-950 px-6 font-semibold text-primary-100 hover:bg-primary-700 disabled:bg-gray-400'
						type='submit'
						disabled={mailData.sending}
					>
						{mailData.buttonText}
					</button>
				</form>
			</div>
		</>
	)
}

ContactForm.defaultProps = {
	startPage: false,
}

export default ContactForm
