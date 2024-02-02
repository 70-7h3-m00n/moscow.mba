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
	const [clicked, setClicked] = useState(false)

	const videoRef = useRef<HTMLVideoElement>(null)

	const videoPlay = () => {
		setPlay(true)
		videoRef.current.play()
	}

	const videoStop = () => {
		setPlay(false)
		videoRef.current.pause()
	}

	const videoMute = () => {
		setSound(false)
		videoRef.current.muted = true
	}

	const videoUnmute = () => {
		setSound(true)
		videoRef.current.muted = false
	}

	const videoControlsOn = () => {
		videoRef.current.controls = true
	}

	const videoControlsOff = () => {
		videoRef.current.controls = false
	}

	const playBackgroundMode = () => {
		if (!clicked) videoPlay()
	}

	const stopBackgroundMode = () => {
		if (!clicked) videoStop()
	}

	const playDefaultMode = () => {
		setClicked(true)
		videoPlay()
		videoControlsOn()
		videoUnmute()
	}

	const stopDefaultMode = () => {
		setClicked(false)
		videoStop()
	}

	return (
		<div className={cn(className, stls.content)}>
			<video
				className={stls.video}
				muted
				onMouseEnter={() => {
					playBackgroundMode()
				}}
				onMouseLeave={() => {
					stopBackgroundMode()
				}}
				width={width}
				height={height}
				style={{ objectFit: 'cover', backgroundSize: 'cover' }}
				preload='auto'
				ref={videoRef}
				loop
				poster={item.preview}
				// autoPlay
				// playsInline
				{...rest}
			>
				<source src={item.src} type='video/mp4' />
			</video>
			{clicked ? (
				<></>
			) : (
				<IconPlay
					className={stls.playBtn}
					onClick={playDefaultMode}
					onMouseEnter={playBackgroundMode}
					onMouseLeave={stopBackgroundMode}
				/>
			)}
			<div className={stls.bottom}>
				<p className={stls.bottom__name}>{item.name}</p>
				<button className={stls.bottom__soundBtn}>
					{sound ? (
						<IconSoundOn onClick={() => videoMute()} />
					) : (
						<IconSoundOff onClick={() => videoUnmute()} />
					)}
				</button>
			</div>
		</div>
	)
}
