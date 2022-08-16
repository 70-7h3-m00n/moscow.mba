import { TGeneralRoute, TGeneralWindowDataLayer } from '@/types/index'

type TypeClickedAskQuestionProps = {
  url: string
}

const clickedAskQuestion = ({ url }: TypeClickedAskQuestionProps) =>
  (window as TGeneralWindowDataLayer).dataLayer?.push({
    event: 'clickedAskQuestion',
    page: url
  })

export default clickedAskQuestion
