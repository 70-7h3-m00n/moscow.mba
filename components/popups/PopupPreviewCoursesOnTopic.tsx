import cn from 'classnames'

import { getClassNames } from '@/helpers/index'

import { TypeClassNames } from '@/types/index'

import stls from '@/styles/components/popups/PopupShowCoursesOnTopic.module.sass'

type TypeSectionPopupCoursesOnTopicProps = {
    handlePopupCoursesOnTopic: () => void
    handleShowPopupPreviewCoursesOnTopic: () => void
} & TypeClassNames

const PopupPreviewCoursesOnTopic = ({
    classNames,
    handlePopupCoursesOnTopic,
    handleShowPopupPreviewCoursesOnTopic
}: TypeSectionPopupCoursesOnTopicProps) => (
    <div className={cn([stls.container], getClassNames({ classNames })) || undefined}>
        <div className={stls.courses}>
            <span className={stls.text}>{'Курсы по теме'}</span>
            <button className={stls.show} onClick={handlePopupCoursesOnTopic}>{'Посмотреть'}</button>
        </div>
        <div className={stls.buttonClosed}>
            <button className={stls.closed} onClick={handleShowPopupPreviewCoursesOnTopic}></button>
        </div>
    </div>
)

export default PopupPreviewCoursesOnTopic