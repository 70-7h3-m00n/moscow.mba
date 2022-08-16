import { TGeneralRoute, TGeneralWindowDataLayer } from '@/types/index'

type TypeClickedGetFullStudyPlanProps = {
  url: string
}

const clickedGetFullStudyPlan = ({ url }: TypeClickedGetFullStudyPlanProps) =>
  (window as TGeneralWindowDataLayer).dataLayer?.push({
    event: 'clickedGetFullStudyPlan',
    page: url
  })

export default clickedGetFullStudyPlan
