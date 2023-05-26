import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest, response: NextResponse) {
	const handleRouteChange = async (url: string) => {
		const validUrl = await fetch(url)

		if (!validUrl.ok) {
			return NextResponse.redirect(new URL('/', request.url))
		} else {
			return (response = NextResponse.next())
		}
	}
	return handleRouteChange(request.url)
}

export const config = {
	matcher: ['/:path*']
}
