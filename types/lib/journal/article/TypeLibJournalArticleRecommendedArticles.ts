type TypeLibRecommendedArticles = {
  title: string | null
  articles:
  | Array<{
    title: string | null
    slug: string | null
  }>
  | []
}

export default TypeLibRecommendedArticles