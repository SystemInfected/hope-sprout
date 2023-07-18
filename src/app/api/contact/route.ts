import { NextResponse } from 'next/server'

type Message = {
	email: string
	message: string
	name?: string
	phone?: string
}

export async function POST(req: Request) {
	const data: Message = await req.json()

	const nodemailer = require('nodemailer')
	const transporter = nodemailer.createTransport({
		port: process.env.NEXT_PUBLIC_MAIL_PORT,
		host: process.env.NEXT_PUBLIC_MAIL_HOST,
		auth: {
			user: process.env.NEXT_PUBLIC_MAIL_USER,
			pass: process.env.NEXT_PUBLIC_MAIL_PASS,
		},
		secure: true,
	})
	const mailData = {
		from: process.env.NEXT_PUBLIC_MAIL_USER,
		to: process.env.NEXT_PUBLIC_MAIL_USER,
		subject: `Meddelande från ${data.name || 'Inget namn'}`,
		text: `${data.message} | Skickat från: ${data.name || 'Inget namn'} (${
			data.email
		} Telefon nr: ${data.phone || 'Inget nummer'})`,
		html: `<div>${data.message.replace(
			/\n/g,
			'<br />'
		)}</div><p>Skickat från: ${data.name || 'Inget namn'} (${
			data.email
		} Telefon nr: ${data.phone || 'Inget nummer'})</p>`,
	}
	try {
		await transporter.sendMail(mailData)
		return NextResponse.json({ status: 200 })
	} catch (error: any) {
		console.error(error)
		return NextResponse.json({ status: error.response.status })
	}
}
