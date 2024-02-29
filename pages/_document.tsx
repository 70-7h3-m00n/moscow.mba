import Document, { Html, Head, Main, NextScript } from 'next/document'
import { MetaFonts, MetaManifest } from '@/components/meta'
import Script from 'next/script'
import { YandexMetrika } from '@/components/seo/Metrika'

class MyDocument extends Document {
	// static async getInitialProps(ctx) {
	//   const initialProps = await Document.getInitialProps(ctx)
	//   return { ...initialProps }
	// }

	render() {
		return (
			<Html lang='ru'>
				<Head>
					{/* <meta charSet='UTF-8' /> */}
					<MetaFonts />
					<MetaManifest />
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
