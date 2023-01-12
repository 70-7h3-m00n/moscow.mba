import stls from '@/styles/components/sections/GetStudyPlan.module.sass'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { routesFront } from '@/config/index'
import { clickedGetFullStudyPlan } from '@/helpers/index'
import Popup from 'reactjs-popup'
import PopupForm from '@/components/popups/PopupForm'
import {
	ContextStaticProps,
	DigitalTransformationContext
} from '@/context/index'
import { Wrapper } from '@/components/layout'

const GetStudyPlan = () => {
	const router = useRouter()
	const { program } = useContext(ContextStaticProps)
	{
		/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */
	}
	const isDigitalTransformation = useContext(DigitalTransformationContext)

	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.content}>
					{isDigitalTransformation ? (
						<h4 className={stls.title}>
							Оставьте заявку на полный учебный план
						</h4>
					) : (
						<h4 className={stls.title}>Получите полный учебный план</h4>
					)}
					<Popup
						trigger={
							<a className={`${stls.btn} ${stls.btnLightBg} ${stls.pointer}`}>
								ПОЛУЧИТЬ
							</a>
						}
						modal
						lockScroll
						nested
						closeOnDocumentClick
						onOpen={() => {
							clickedGetFullStudyPlan({
								url: `${routesFront.root}${router.asPath}`
							})
						}}>
						{/* @ts-expect-error  */}
						{close => (
							<PopupForm
								title={
									<>
										Получите полный <br className={stls.br} /> учебный план
									</>
								}
								disc={
									'Оставьте заявку, менеджер пришлет Вам полный учебный план, а также расскажет о программе и возможных скидках'
								}
								closePopUpForm={close}
								formName={`Заявка с модальной формы "Получите полный учебный план"${
									program?.title
										? ` для программы ${program?.category?.type || ''} ${
												program?.studyFormat || ''
										  } ${program.title}`
										: ''
								}`}
							/>
						)}
					</Popup>
				</div>
			</Wrapper>
		</section>
	)
}

export default GetStudyPlan
