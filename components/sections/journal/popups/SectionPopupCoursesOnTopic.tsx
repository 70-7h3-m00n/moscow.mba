import { PopupCoursesOnTopic } from '@/components/popups'

import {
    TypeClassNames,
    TypeLibJournalArticleRecommendedProgramsSection
} from '@/types/index'

import stls from '@/styles/components/sections/journal/popup/SectionPopupCoursesOnTopic.module.sass'


type TypeSectionPopupCoursesOnTopicProps = {
    recommendedProgramsSection: TypeLibJournalArticleRecommendedProgramsSection | null
} & TypeClassNames

const SectionPopupCoursesOnTopic = ({ recommendedProgramsSection }: TypeSectionPopupCoursesOnTopicProps) => {
    if (!recommendedProgramsSection) return null

    return (
        <section>
            <PopupCoursesOnTopic
                classNames={[stls.wrapper]}
                recommendedProgramsSection={recommendedProgramsSection} />
        </section>

    )
}

export default SectionPopupCoursesOnTopic