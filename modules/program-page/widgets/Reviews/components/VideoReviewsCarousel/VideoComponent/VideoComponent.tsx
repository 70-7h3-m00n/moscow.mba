import stls from './VideoComponent.module.sass'
import cn from 'classnames'
import { VideoComponentProps } from './types'

import { useRef, useState } from 'react'
import { IconPlay } from './widgets/IconPlay/IconPlay'
import { IconSoundOn } from './widgets/IconSoundOn/IconSoundOn'
import { IconSoundOff } from './widgets/IconSoundOff/IconSoundOff'

export const VideoComponent = ({
	item,
	width = 318,
	height = 424,
	className,
	...rest
}: VideoComponentProps) => {
	const [play, setPlay] = useState(false)
	const [sound, setSound] = useState(false)

	const videoRef = useRef<HTMLVideoElement>(null)

	const videoPlay = () => {
		videoRef.current.play()
	}

	const videoStop = () => {
		videoRef.current.pause()
	}

	const videoMute = () => {
		setSound(false)
		videoRef.current.muted = true
	}

	const videoUnMute = () => {
		setSound(true)
		videoRef.current.muted = false
	}

	const videoControlsOn = () => {
		videoRef.current.controls = true
	}

	const videoControlsOff = () => {
		videoRef.current.controls = false
	}

	const playBtnHandler = () => {
		setPlay(true)
		videoControlsOn()
		videoUnMute()
	}

	return (
		<div className={cn(className, stls.content)}>
			<video
				className={stls.video}
				muted
				onMouseEnter={() => {
					videoPlay()
				}}
				onMouseLeave={() => {
					videoStop()
				}}
				width={width}
				height={height}
				style={{ objectFit: 'cover', backgroundSize: 'cover' }}
				preload='auto'
				ref={videoRef}
				loop
				// autoPlay
				// playsInline
				{...rest}
			>
				<source src={item.src} type='video/mp4' />
			</video>
			{play ? (
				<></>
			) : (
				<IconPlay
					className={stls.playBtn}
					onClick={playBtnHandler}
					onMouseEnter={videoPlay}
					onMouseLeave={videoStop}
				/>
			)}
			<div className={stls.bottom}>
				<p className={stls.bottom__name}>{item.name}</p>
				<button className={stls.bottom__soundBtn}>
					{sound ? (
						<IconSoundOn onClick={() => setSound(false)} />
					) : (
						<IconSoundOff onClick={() => setSound(true)} />
					)}
				</button>
			</div>
		</div>
	)
}
