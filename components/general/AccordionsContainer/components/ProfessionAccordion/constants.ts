export const duration = 0.6

export const initialStyles = {
	opacity: 0,
	transition: `all ${duration}s ease-out`
}

export const transitionStyles = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 }
}
