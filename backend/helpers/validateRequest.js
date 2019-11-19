export default function validateRequest(req, res) {
  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).json({
      message: 'Content-type must be application/json.',
    });
    return;
  }

  const requiredKeys = ['deposit_name', 'userId'];
  const reqBodyKeys = Object.keys(req.body);
  let missingKeys = '';

  requiredKeys.forEach((item) => {
    if (!reqBodyKeys.includes(item)) {
      missingKeys += `${item}`;
    }
  });

  if (missingKeys.length !== 0) {
    res.status(400).json({
      message: `Missing ${missingKeys}.`,
    });
    return;
  }
  res.status(200).json({
    id: '',
  });
}
