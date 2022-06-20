import stls from '@/styles/pages/Index.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext, useAt } from '@/hooks/index'
import {
  JumbotronCta,
  About,
  ConferencesInEurope,
  ForeignAffiliates,
  StudentsInternational,
  CorporateClients,
  Programs,
  Executive,
  ContactUs
} from '@/components/sections'
import { SeoOrganizationJsonLd } from '@/components/seo'

const PageHome: NextPage<TypePageHomeProps> = ({ programs }) => {
  usePageHandleContext({ programs })

  const at = useAt()

  const seoParams = {
    title: `${companyName}`,
    desc: truncate(
      `${
        at.en
          ? 'Concur relevant business education from international experts'
          : 'Получите современное бизнес образование от международных экспертов'
      }`,
      120
    ),
    canonical: routesFront.root
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
      <JumbotronCta />
      <About />
      <ConferencesInEurope />
      <ForeignAffiliates />
      <StudentsInternational />
      <CorporateClients />
      <Programs />
      <Executive />
      <ContactUs overlapsFooter />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.home, context })

export default PageHome
