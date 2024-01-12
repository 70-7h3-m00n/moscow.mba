import stls from '@/styles/components/sections/CurrentLicenses.module.sass'
import { ImageContainer } from '@/components/general'
import { Wrapper } from '@/components/layout'
// import { CheckLicenses } from '@/components/sections'
import CheckLicenses from '@/components/sections/general/CheckLicenses'
import licenseP1 from '@/public/legaldocuments/license-p1.jpg'
import licenseP2 from '@/public/legaldocuments/license-p2.jpg'
import charterP1 from '@/public/legaldocuments/charter-p1.jpg'
import useAt from '@/hooks/useAt'

const CurrentLicenses = () => {
	const at = useAt()

	const licenses = [
		{
			path: licenseP1,
			name: at.en ? 'License (p. 1)' : 'Лицензия (стр. 1)',
			fullWidth: 806,
			fullHeight: 1193,
			smallWidth: 342,
			smallHeight: 508
		},
		{
			path: licenseP2,
			name: at.en ? 'License (p. 2)' : 'Лицензия (стр. 2)',
			fullWidth: 806,
			fullHeight: 1193,
			smallWidth: 342,
			smallHeight: 508
		},
		{
			path: charterP1,
			name: at.en ? 'Regulation No. 1.1' : 'Положение № 1.1',
			fullWidth: 806,
			fullHeight: 1193,
			smallWidth: 342,
			smallHeight: 508
		}
	]

	return (
		<section>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.content}>
					<h2 className={stls.subHeading}>
						{at.en ? 'Valid licenses' : 'Действующие лицензии'}
					</h2>
					<p>
						{at.en
							? 'License of the Department of Education of the City of Moscow for educational activities:'
							: 'Лицензия Департамента образования города Москвы на осуществление образовательной деятельности:'}
					</p>
					<div className={stls.licensesContainer}>
						{licenses.map((license, idx) => (
							<ImageContainer
								key={license.name + idx}
								image={license}
								imageWidth={license.smallWidth}
								imageHeight={license.smallHeight}
							/>
						))}
					</div>
					{!at.en && <CheckLicenses />}
				</div>
			</Wrapper>
		</section>
	)
}

export default CurrentLicenses
