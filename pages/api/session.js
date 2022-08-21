export default async (req, res) => {
  res.status(200).json({ data: req.session.get('user') })
}
