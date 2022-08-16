type TGeneralWindowDataLayer = Window &
  typeof globalThis & { dataLayer?: Array<{ event: string; page: string }> }

export default TGeneralWindowDataLayer
