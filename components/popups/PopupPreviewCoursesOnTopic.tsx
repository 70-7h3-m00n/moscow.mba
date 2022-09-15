import {
    useEffect,
    useState
} from 'react'
import { createPortal } from "react-dom"
import cn from 'classnames'

import { getClassNames } from '@/helpers/index'

import { useWindowWidth, useScroll } from '@/hooks/index'

import { TypeClassNames } from '@/types/index'

import stls from '@/styles/components/popups/PopupShowCoursesOnTopic.module.sass'

type TypeSectionPopupCoursesOnTopicProps = {
    handlePopupCoursesOnTopic: () => void
} & TypeClassNames

const PopupPreviewCoursesOnTopic = ({ classNames, handlePopupCoursesOnTopic }: TypeSectionPopupCoursesOnTopicProps) => {
    const [isShow, setIsShow] = useState(true)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, [])

    const windowWidth = useWindowWidth()

    const handleShowPopupPreviewCoursesOnTopic = () => {
        setIsShow(false)
    }

    const popupPreviewCoursesOnTopicElements = (
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

    if (!isShow) {
        return null
    } else {
        return (mounted && windowWidth <= 1020)
            ? createPortal(
                popupPreviewCoursesOnTopicElements, document.querySelector('#__next'))
            : ''
    }
}

export default PopupPreviewCoursesOnTopic