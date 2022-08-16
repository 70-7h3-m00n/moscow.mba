import { TGeneralRoute, TGeneralWindowDataLayer } from '@/types/index'

type TypeFilledUpFormWithoutSubmissionProps = {
  url: string
}

const filledUpFormWithoutSubmission = ({
  url
}: TypeFilledUpFormWithoutSubmissionProps) =>
  (window as TGeneralWindowDataLayer).dataLayer?.push({
    event: 'filledUpFormWithoutSubmission',
    page: url
  })

export default filledUpFormWithoutSubmission
