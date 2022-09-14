import { PopupDownloadMaterials } from '@/components/popups'

import { TypeClassNames } from '@/types/index'

import stls from '@/styles/components/sections/journal/popup/SectionPopupDownloadMaterials.module.sass'

type TypeSectionPopupCoursesOnTopicProps = TypeClassNames

const SectionPopupDownloadMaterials = () => {
    return (
        <section>
            <PopupDownloadMaterials classNames={[stls.wrapper]}/>
        </section>
    )
}

export default SectionPopupDownloadMaterials