import Link from 'next/link'

const BreadcrumbItem = ({
	linkText,
	linkPath,
	itemIndex,
	listLength,
	userViewingProgramChunk
}) => {
	let linkRef = linkPath

	if (linkPath === '/programs') linkRef += '/mini/online'

	const lastBreadcrumbItem = itemIndex === listLength - 1

	if (lastBreadcrumbItem)
		return (
			<li>
				<span>{linkText}</span>
			</li>
		)

	return (
		<li>
			<Link href={linkRef}>{linkText}</Link>
		</li>
	)
}

export default BreadcrumbItem
