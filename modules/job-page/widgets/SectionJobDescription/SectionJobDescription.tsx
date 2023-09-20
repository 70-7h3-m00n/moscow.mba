import { Wrapper } from '@/components/layout'
import stls from './SectionJobDescription.module.sass'

export default function SectionJobDescription() {
	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<h2 className={stls.title}>Цель карьерного центра </h2>
				<p className={stls.paragraph}>
					Мы стремимся установить и поддержать связи с лучшими работодателями и
					бизнес-сообществом, чтобы помочь нашим выпускникам получить доступ к
					лучшим вакансиям и возможностям для развития карьеры без тысячи
					бессмысленных собеседований
				</p>
			</Wrapper>
		</section>
	)
}
