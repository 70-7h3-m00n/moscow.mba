import { PopupCoursesOnTopic } from '@/components/popups'
import { TypeLibJournalArticleRecommendedProgramsSection } from '@/types/index'


type TypeSectionPopupCoursesOnTopicProps = {
    recommendedProgramsSection: TypeLibJournalArticleRecommendedProgramsSection | null
}

const SectionPopupCoursesOnTopic = ({ recommendedProgramsSection }: TypeSectionPopupCoursesOnTopicProps) => {
    if (!recommendedProgramsSection) return null

    return (
        <PopupCoursesOnTopic recommendedProgramsSection={recommendedProgramsSection} />
    )
}

export default SectionPopupCoursesOnTopic