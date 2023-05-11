const revalidate = async (req, res) => {
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.unstable_revalidate(decodeURIComponent(req.query.path))
    return res.json({ revalidated: true })
  } catch (err) {
    console.log(err)
    return res.status(500).send('Error revalidating')
  }
}

export default revalidate
