import { TypeLibSeminarCategory } from '@/types/index'

type Author = {
	name: string | null
	portrait: string | null
}

type PdfMaterials = {
	name: string | null
	url: string | null
}

type TypeLibSeminar = {
	id: number | null
	date: Date | null
	duration: number | null
	title: string | null
	slug: string | null
	category: TypeLibSeminarCategory | null
	authors: Author[] | null
	address: string | null
	price: number | null
	description: string | null
	advantagesList: string[] | null
	pdfMaterials: PdfMaterials | null
}

export default TypeLibSeminar
