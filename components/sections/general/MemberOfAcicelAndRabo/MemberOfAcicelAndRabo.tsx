import stls from './MemberOfAcicelAndRabo.module.sass'
import cn from 'classnames'
import { ImageContainer } from '@/components/general'
import { Wrapper } from '@/components/layout'
import rabeP1 from '@/public/assets/images/accreditation/ecicel-accreditation.jpg'
import raboP1 from '@/public/legaldocuments/rabe-p1.jpg'

const acicelImage = {
	path: rabeP1,
	name: 'Certificate of Accreditation',
	fullWidth: 1245,
	fullHeight: 895,
	smallWidth: 440,
	smallHeight: 317
}

const raboImage = {
	path: raboP1,
	name: 'RABO certificate',
	fullWidth: 1326,
	fullHeight: 1875,
	smallWidth: 232,
	smallHeight: 345
}

const list = [
	'Moscow Business Academy is a member of the Russian Association of Business Education, which confirms the high level of educational programs',
	'In Russia, RABO membership is held by a limited number of organizations that meet the quality requirements of educational programs'
]

const MemberOfAcicelAndRabo = () => {
	return (
		<section>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.content}>
					<div className={stls.left}>
						<h2 className={stls.title}>RABO Membership</h2>
						{list.map((item, idx) => (
							<p key={`${item}-${idx}`} className={stls.p}>
								{item}
							</p>
						))}
					</div>
					<div className={stls.right}>
						<ImageContainer
							image={raboImage}
							imageWidth={raboImage.smallWidth}
							imageHeight={raboImage.smallHeight}
						/>
					</div>
				</div>
				<div className={stls.content}>
					<div className={stls.left}>
						<h2 className={stls.title}>Ecicel Accreditation</h2>
						<p className={stls.p}>
							Our programs have been rigorously reviewed by the European
							accreditation commission ECICEL and fully comply with all
							standards. This accreditation guarantees the high quality of
							education at Moscow Business Academy
						</p>
					</div>
					<div className={stls.right}>
						<ImageContainer
							image={acicelImage}
							imageWidth={acicelImage.smallWidth}
							imageHeight={acicelImage.smallHeight}
						/>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default MemberOfAcicelAndRabo
