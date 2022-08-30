import stls from '@/styles/config/Breakpoints.module.sass'

type TypeBreakpoints = {
    phone: number
    tablet: number
    laptop: number
    widescreen: number
  }
  
  const { phone, tablet, laptop, widescreen } = stls
  
  const breakpoints: TypeBreakpoints = {
    phone: +phone.slice(0, -2),
    tablet: +tablet.slice(0, -2),
    laptop: +laptop.slice(0, -2),
    widescreen: +widescreen.slice(0, -2),
  }
  
  export default breakpoints