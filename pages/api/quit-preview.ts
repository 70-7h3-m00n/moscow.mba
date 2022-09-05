import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { routesFront, routesBack } from '@/config/index'

const quitPreview = async (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData()
  res.redirect(routesFront.root)
}

export default quitPreview
