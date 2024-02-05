import Link from 'next/link'

export const BreadcrumbItemAlt = ({
	linkText,
	linkPath,
	itemIndex,
	listLength,
	userViewingProgramChunk
}) => {
	let linkRef = linkPath

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
