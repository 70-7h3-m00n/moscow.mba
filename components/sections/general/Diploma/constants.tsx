import { PopupImage } from '@/components/popups'
import base64pixel from '@/config/base64pixel'
import useAt from '@/hooks/useAt'
import Image from 'next/image'
import Popup from 'reactjs-popup'

export const DiplomaPaginationImages = () => {
	const at = useAt()
	return at.course
		? [
				{
					title: 'Сертификат академии',
					image: (
						<Popup
							trigger={
								<a>
									<Image
										key={`diplomaImage-${1}`}
										src={'/assets/diplomas/courses/certificate-courses.jpg'}
										alt='Сертификат академии'
										width={532}
										height={376}
										placeholder='blur'
										blurDataURL={base64pixel}
									/>
								</a>
							}
							className='image-popup'
							modal
							lockScroll
							nested
							closeOnDocumentClick
						>
							{/* @ts-expect-error  */}
							{close => (
								<PopupImage
									closePopupImage={close}
									image={{
										path: '/assets/diplomas/courses/certificate-courses.jpg',
										fullWidth: 1485,
										FullHeight: 1050,
										name: 'Сертификат академии'
									}}
								/>
							)}
						</Popup>
					)
				},
				{
					title: 'Удостоверение установленного образца',
					image: (
						<Popup
							trigger={
								<a>
									<Image
										key={`diplomaImage-${2}`}
										src={
											'/assets/diplomas/courses/qualification-certificate-courses.jpg'
										}
										alt='Удостоверение установленного образца'
										width={532}
										height={376}
										placeholder='blur'
										blurDataURL={base64pixel}
									/>
								</a>
							}
							className='image-popup'
							modal
							lockScroll
							nested
							closeOnDocumentClick
						>
							{/* @ts-expect-error  */}
							{close => (
								<PopupImage
									closePopupImage={close}
									image={{
										path: '/assets/diplomas/courses/qualification-certificate-courses.jpg',
										fullWidth: 1480,
										FullHeight: 1047,
										name: 'Удостоверение установленного образца'
									}}
								/>
							)}
						</Popup>
					)
				}
		  ]
		: [
				{
					title: 'Сертификат академии',
					image: (
						<Popup
							trigger={
								<a>
									<Image
										key={`diplomaImage-${1}`}
										src={
											'/assets/diplomas/profession/certificate-profession.jpg'
										}
										alt='Сертификат академии'
										width={532}
										height={376}
										placeholder='blur'
										blurDataURL={base64pixel}
									/>
								</a>
							}
							className='image-popup'
							modal
							lockScroll
							nested
							closeOnDocumentClick
						>
							{/* @ts-expect-error  */}
							{close => (
								<PopupImage
									closePopupImage={close}
									image={{
										path: '/assets/diplomas/profession/certificate-profession.jpg',
										fullWidth: 1485,
										FullHeight: 1050,
										name: 'Сертификат академии'
									}}
								/>
							)}
						</Popup>
					)
				},
				{
					title: 'Диплом установленного образца',
					image: (
						<Popup
							trigger={
								<a>
									<Image
										key={`diplomaImage-${2}`}
										src={
											'/assets/diplomas/profession/qualification-diploma-profession.jpg'
										}
										alt='Диплом установленного образца'
										width={532}
										height={376}
										placeholder='blur'
										blurDataURL={base64pixel}
									/>
								</a>
							}
							className='image-popup'
							modal
							lockScroll
							nested
							closeOnDocumentClick
						>
							{/* @ts-expect-error  */}
							{close => (
								<PopupImage
									closePopupImage={close}
									image={{
										path: '/assets/diplomas/profession/qualification-diploma-profession.jpg',
										fullWidth: 1485,
										FullHeight: 1050,
										name: 'Диплом установленного образца'
									}}
								/>
							)}
						</Popup>
					)
				}
		  ]
}
