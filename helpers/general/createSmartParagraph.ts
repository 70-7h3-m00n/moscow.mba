import parse, { domToReact } from 'html-react-parser'
import { marked } from 'marked'

// * the following normalizes the data from the API put by the content editor in the CMS
// * removed unsupported in UI tags
// * adds spaces between text lines if there are empty lines in between text lines put by the content editor in the CMS (and if there are, also adds space at the beggining of the text)

// todo: fix the syntactic mess

// type Merge<A, B> = {
//   [K in keyof A]: K extends keyof B ? B[K] : A[K]
// } & B extends infer O
//   ? { [K in keyof O]: O[K] }
//   : never

// type TCreateSmartParagraphProps<T = Array<{ [key: string]: any }>> = {
//   paragraph: T
//   className: string
// }

type TCreateSmartParagraphProps<T> = {
  paragraph: T
  className: string
}

// type TSmartParagraph<T> = Array<
//   Merge<T[number], { text: string | JSX.Element | Array<JSX.Element> }>
// >

type TSmartParagraph<T> = Omit<T extends (infer U)[] ? U : never, 'text'> & {
  text: ReturnType<typeof domToReact>
}

const createSmartParagraph = <T extends Array<any>>({
  paragraph,
  className
}: TCreateSmartParagraphProps<T>): Array<TSmartParagraph<T>> => {
  if (!paragraph) return null

  if (typeof paragraph !== 'object') return null

  if (!paragraph.length) return null

  const paragraphFiltered = paragraph.filter(item => item && item.text)

  if (!paragraphFiltered.length) return null

  return paragraphFiltered.map(item => {
    const itemText = item.text.includes('\n') ? `\n\n${item.text}` : item.text

    return {
      ...item,
      text: parse(
        marked(
          itemText.replace(/\n/g, `<span className="${className}"></span>`)
        )
          .replace(/<p>/g, '')
          .replace(/<\/p>/g, '')
          .replace(/<ul>/g, '')
          .replace(/<\/ul>/g, '')
          .replace(/<ol>/g, '')
          .replace(/<\/ol>/g, '')
          .replace(/<li>/g, '')
          .replace(/<\/li>/g, '')
          .replace(/<code>/g, '')
          .replace(/<\/code>/g, '')
          .replace(/<blockquote>/g, '')
          .replace(/<\/blockquote>/g, '')
          .replace(/<h[0-9]+[\s\S]*<\/h[0-9]+>/g, '')
      )
    }
  })
}

export default createSmartParagraph
