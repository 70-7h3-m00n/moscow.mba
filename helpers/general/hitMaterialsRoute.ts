import { routesFront } from '@/config/index'

const hitMaterialsRoute = async (data) => {
    try {
        const res = await fetch(`${routesFront.root}/api/materials`, {
            method: 'post',
            body: JSON.stringify(data)
        })
        if (!res.ok) throw res
        return res.status

      } catch (err) {
        return err.status
      }
}

export default hitMaterialsRoute