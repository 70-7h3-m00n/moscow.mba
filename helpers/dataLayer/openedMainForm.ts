import { TGeneralRoute, TGeneralWindowDataLayer } from '@/types/index'

type TypeOpenedMainFormProps = {
  url: string
}

const openedMainForm = ({ url }: TypeOpenedMainFormProps) =>
  (window as TGeneralWindowDataLayer).dataLayer?.push({
    event: 'openedMainForm',
    page: url
  })

export default openedMainForm
