import { TGeneralRoute, TGeneralWindowDataLayer } from '@/types/index'

type TypeClickedGetFullTeachersListProps = {
  url: string
}

const clickedGetFullTeachersList = ({
  url
}: TypeClickedGetFullTeachersListProps) =>
  (window as TGeneralWindowDataLayer).dataLayer?.push({
    event: 'clickedGetFullTeachersList',
    page: url
  })

export default clickedGetFullTeachersList
