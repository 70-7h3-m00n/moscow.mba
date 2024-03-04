import Document, { Html, Head, Main, NextScript } from 'next/document'
import { MetaFonts, MetaManifest } from '@/components/meta'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='ru'>
				<Head>
					<MetaFonts />
					<MetaManifest />
					{/* {process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' && (
						<meta name='robots' content='noindex,nofollow' />
					)} */}
				</Head>
				<body>
					<>
						<Main />
						<NextScript />
					</>
				</body>
			</Html>
		)
	}
}

export default MyDocument
