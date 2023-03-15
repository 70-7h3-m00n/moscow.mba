import { StaticImageData } from 'next/image'

type TImgsObj = Record<string, StaticImageData>

export const createImgsArr = (imgsObj: TImgsObj) =>
	Object.entries(imgsObj).map(([alt, src]) => ({
		alt,
		src
	}))