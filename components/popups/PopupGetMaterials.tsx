import Image from 'next/image'
import cn from 'classnames'

import { getClassNames } from '@/helpers/index'

import { TypeClassNames } from '@/types/index'
import { FormAlpha } from '@/components/forms'

import stls from '@/styles/components/popups/PopupGetMaterials.module.sass'

import pdfPopupGetMaterials from '@/public/assets/images/journal/pdfPopupGetMaterials.png'
import linePopupGetMaterials from '@/public/assets/images/journal/linePopupGetMaterials.png'

type TypeSectionPopupCoursesOnTopicProps = {
    handlePopupGetMaterials: () => void
}
    & TypeClassNames

const PopupGetMaterials = ({
    classNames,
    handlePopupGetMaterials
}: TypeSectionPopupCoursesOnTopicProps) => {
    return (
        <>
            <div
                className={stls.wrapper}
                onClick={handlePopupGetMaterials}
            ></div>
            <div className={cn([stls.container], getClassNames({ classNames })) || undefined}>
                <div className={stls.pdfPopupGetMaterials}>
                    <Image
                        src={pdfPopupGetMaterials}
                        width={190}
                        height={230}
                    />
                </div>
                <div className={stls.topLinePopupGetMaterials}>
                    <Image
                        src={linePopupGetMaterials}
                        width={246}
                        height={246}
                    />
                </div>
                <div className={stls.bottomLinePopupGetMaterials}>
                    <Image
                        src={linePopupGetMaterials}
                        width={246}
                        height={246}
                    />
                </div>
                <button
                    className={stls.closed}
                    onClick={handlePopupGetMaterials}></button>
                <div className={stls.title}>
                    <p className={stls.text}>{'7 ошибок разрушения карьеры.\nГайд по профессиям IT '}</p>
                </div>
                <div className={stls.form}>
                    <FormAlpha />
                </div>
            </div>
        </>
    )
}

export default PopupGetMaterials