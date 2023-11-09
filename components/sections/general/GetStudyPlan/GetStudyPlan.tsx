import stls from './GetStudyPlan.module.sass'
import cn from 'classnames'
import { GetStudyPlanProps } from './types'

import { useContext } from 'react'
import { useRouter } from 'next/router'
import { routesFront } from '@/config/index'
import { clickedGetFullStudyPlan } from '@/helpers/index'
import Popup from 'reactjs-popup'
import PopupForm from '@/components/popups/PopupForm'
import { ContextStaticProps } from '@/context/index'
import { Wrapper } from '@/components/layout'
import useAt from '@/hooks/useAt'

const GetStudyPlan = ({ className, lightTheme = false }: GetStudyPlanProps) => {
	const at = useAt()
	const router = useRouter()
	const { program } = useContext(ContextStaticProps)

	return (
		<section
			className={cn(className, stls.container, {
				[stls.ligthTheme]: lightTheme
			})}
		>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.content}>
					{at.mini ? (
						<p className={stls.title}>Оставьте заявку на полный учебный план</p>
					) : at.profession ? (
						<div className={stls.titleBox}>
							<h4 className={stls.title}>Получите расширенный учебный план</h4>
							<p className={stls.description}>
								Оставьте заявку и получите полный учебный план
							</p>
						</div>
					) : (
						<h4 className={stls.title}>Получите полный учебный план</h4>
					)}
					<Popup
						trigger={
							<a
								className={cn(stls.btn, stls.btnLightBg, stls.pointer, {
									[stls.redButton]: lightTheme
								})}
							>
								{lightTheme ? 'ПОЛУЧИТЬ УЧЕБНЫЙ ПЛАН' : 'ПОЛУЧИТЬ'}
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
						}}
					>
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
