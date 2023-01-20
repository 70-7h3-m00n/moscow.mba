import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { routesFront, routesBack } from '@/config/index'

// https://<your-site>/api/preview?secret=<token>&slug=<path>
const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.secret !== process.env.PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({})
  res.redirect(routesFront.root)
}

export default preview
