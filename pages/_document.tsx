import Document, { Html, Head, Main, NextScript } from 'next/document'
import { MetaFonts, MetaManifest } from '@/components/meta'
import { dev } from '@/config/index'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='ru'>
				<Head>
					<MetaFonts />
					<MetaManifest />
					{dev && <meta name='robots' content='noindex,nofollow' />}
					{process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' && (
						<>
							<meta name='robots' content='noindex,nofollow' />
							<meta name='preview' content='meta works' />
						</>
					)}
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
