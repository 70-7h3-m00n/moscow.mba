import stls from '@/styles/components/general/Breadcrumbs.module.sass'
import BreadcrumbItem from '@/components/general/BreadcrumbItem'
import { useAt } from '@/helpers/index'
import { useRouter } from 'next/router'
import Wrapper from '../layout/Wrapper'

const mainRoutes = [
  {
    label: {
      ru: 'Главная',
      'en-US': 'Home'
    },
    path: '/'
  },
  {
    label: {
      ru: 'Программы',
      'en-US': 'Programs'
    },
    path: '/programs'
  },
  {
    label: {
      ru: 'Об академии',
      'en-US': 'About'
    },
    path: '/about'
  },
  {
    label: {
      ru: 'Эксперты',
      'en-US': 'Experts'
    },
    path: '/teachers'
  },
  {
    label: {
      ru: 'Вебинары',
      'en-US': 'Webinars'
    },
    path: '/webinars'
  },
  {
    label: {
      ru: 'Ближайшие вебинары',
      'en-US': 'Upcoming webinars'
    },
    path: '/webinars/upcoming'
  },
  {
    label: {
      ru: 'Прошедшие вебинары',
      'en-US': 'Archived webinars'
    },
    path: '/webinars/archive'
  },
  {
    label: {
      ru: 'Контакты',
      'en-US': 'Contact'
    },
    path: '/contact'
  },
  {
    label: {
      ru: 'Сведения об организации',
      'en-US': 'Legal'
    },
    path: '/legal'
  },
  {
    label: {
      ru: 'Оплата',
      'en-US': 'Payment'
    },
    path: '/payment'
  }
]

const homeRoute = mainRoutes.find(route => route.path === '/')

const professionRoute = {
  label: {
    ru: 'Профессия',
    'en-US': 'Profession'
  },
  path: '/programs/profession/online'
}

const courseRoute = {
  label: {
    ru: 'Курс',
    'en-US': 'Course'
  },
  path: '/programs/course/online'
}

const Breadcrumbs = ({ programChunkData = {} }) => {
  const at = useAt()
  const router = useRouter()
  const userViewingProfession = at.profession
  const userViewingCourse = at.course
  const userViewingPrograms = at.programs
  const userViewingProgramChunk = at.programChunk

  let breadcrumbsList = [homeRoute]
  const maxNumOfBreadcrumbs = 3
  const additionalRoutes = []

  const matchingMainRoutes = mainRoutes
    .filter(route => route.path !== '/')
    .filter(
      route =>
        router.pathname === route.path ||
        at.getSplitedPath.includes(route.path.slice(1))
    )

  const addProgramsRoute = splitedPath => {
    const excludingMainProgramsRoute = splitedPath.filter(
      pathPart => pathPart !== 'programs'
    )

    const programsRoute = excludingMainProgramsRoute.reduce(
      (acc, curr, idx) => {
        if (userViewingProfession) return professionRoute
        if (userViewingCourse) return courseRoute

        idx === 0
          ? (acc.label[router.locale] +=
              curr[0].toUpperCase() + curr.slice(1) + ' MBA ')
          : (acc.label[router.locale] += curr.toUpperCase())

        return acc
      },
      {
        label: {
          ru: '',
          'en-US': ''
        },
        path: '/' + splitedPath.join('/')
      }
    )
    additionalRoutes.push(programsRoute)
  }

  const addProgramChunkRoute = (splitedPath, programChunkData) => {
    const { title, titleEng, url: programChunkUrl } = programChunkData

    const programChunkRoute = {
      label: {
        ru: title,
        'en-US': titleEng
      },
      path: '/' + splitedPath.join('/') + '/' + programChunkUrl
    }

    additionalRoutes.push(programChunkRoute)
  }

  if (userViewingPrograms) addProgramsRoute(at.getSplitedPath)
  if (userViewingProgramChunk)
    addProgramChunkRoute(at.getSplitedPath, programChunkData)

  if (matchingMainRoutes.length) breadcrumbsList.push(...matchingMainRoutes)
  if (additionalRoutes.length) breadcrumbsList.push(...additionalRoutes)

  if (breadcrumbsList.length === 1) return null

  if (breadcrumbsList.length > maxNumOfBreadcrumbs)
    breadcrumbsList = breadcrumbsList.slice(-maxNumOfBreadcrumbs)

  return (
    <div
      className={[stls.breadcrumbsOuter, stls.jumbotronBreadcrumbs].join(' ')}>
      <Wrapper>
        <ul className={stls.breadcrumbs}>
          {breadcrumbsList.map((route, idx) => (
            <BreadcrumbItem
              key={route.label['en-US'] + idx + route.label['ru']}
              linkText={route.label[router.locale]}
              linkPath={route.path}
              itemIndex={idx}
              listLength={breadcrumbsList.length}
              userViewingProgramChunk={userViewingProgramChunk}
            />
          ))}
        </ul>
      </Wrapper>
    </div>
  )
}

export default Breadcrumbs
