import { useContext, useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { v4 as uuidv4 } from 'uuid'
import useAt from './useAt'
import { ContextStaticProps } from '../context'

const useGenerateLeadGTM = (text: string = 'null') => {
	const at = useAt()
	const { program } = useContext(ContextStaticProps)

	const actionId = program?.id || uuidv4()
	const productId = program?.id || 'question'
	const productName = program?.title || 'question'

	useEffect(() => {
		const tagManagerArgs = {
			dataLayer: {
				event: 'generate_lead',
				ecommerce: {
					add: {
						actionField: {
							id: actionId
						},
						products: [
							{
								id: productId,
								name: productName,
								programFormat: at.online
									? 'online'
									: at.blended
									? 'blended'
									: null,
								programType: at.mini
									? 'mini'
									: at.mba
									? 'mba'
									: at.profession
									? 'profession'
									: at.course
									? 'course'
									: null
							}
						]
					}
				}
			},
			dataLayerName: 'dataLayer'
		}
		TagManager.dataLayer(tagManagerArgs)

		console.log(`<<<<<<< GTM ADDED ${text} >>>>>>`)
	}, [])

	return
}

export default useGenerateLeadGTM
