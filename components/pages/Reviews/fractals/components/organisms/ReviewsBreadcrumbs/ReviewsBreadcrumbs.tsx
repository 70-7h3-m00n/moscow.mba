import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import { Breadcrumbs } from '@/components/general'
import { Wrapper } from '@/components/layout'

const ReviewsBreadcrumbs = () => (
	<section className={breadcrumbsStls.jumbotronGeneral}>
		<Wrapper>
			<Breadcrumbs />
		</Wrapper>
	</section>
)

export default ReviewsBreadcrumbs
