import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { Webinars } from '@/components/pages'
import { SeoOrganizationJsonLd } from '@/components/seo'

const PageWebinarsArchive = ({ programs }) => {
  usePageHandleContext({ programs })

  const seoParams = {
    title: `Прошедшие вебинары • MBA - ${companyName}`,
    desc: truncate('Узнайте даты и время вебинаров MBA', 120),
    canonical: `${routesFront.root}${routesFront.webinars}`
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routesFront.root}${routesFront.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: companyName,
              type: 'image/png'
            }
          ],
          site_name: companyName
        }}
      />
      <SeoOrganizationJsonLd />
      <Webinars
        title={'Прошедшие вебинары'}
        heading={'Прошедшие вебинары'}
        timeframe={'archive'}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.webinarsArchive, context })

export default PageWebinarsArchive
