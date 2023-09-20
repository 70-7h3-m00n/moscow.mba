import stls from './PartnerPage.module.sass'

import {
	About,
	CorporateClients,
	SectionDownloadForm,
	SectionHero
} from '@/components/sections'
import { data } from './widgets/data/PartnerData'
import { partnerEmail, partnerLinks } from './widgets/data/DownloadForm'
import SectionCooperationVariants from './widgets/SectionCooperationVariants/SectionCooperationVariants'
import { Variants } from './widgets/data/Variants'
import SectionPartnersReviews from './widgets/SectionPartnersReviews/SectionPartnersReviews'
import { PartnersReviews } from './widgets/data/PartnersReviews'

export default function PartnerPage() {
	return (
		<>
			<SectionHero className={stls.hero} data={data} />
			<About className={stls.about} />
			<CorporateClients className={stls.corporate} />
			<SectionCooperationVariants
				className={stls.cooperation}
				data={Variants}
			/>
			<SectionPartnersReviews
				className={stls.partnersReviews}
				data={PartnersReviews}
			/>
			<SectionDownloadForm
				className={stls.downloadForm}
				mail={partnerEmail}
				downloadLinks={partnerLinks}
			/>
		</>
	)
}
