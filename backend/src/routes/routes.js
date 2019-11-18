const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const { deposit_name, user_id } = req.body;
  console.log(req.headers);
  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).json({
      "message": 'Content-type must be application/json.',
    });
    return;
  }
  const reqBodykeys = Object.keys(req.body);
  let missingKeys = '';
  const keysArr = ['deposit_name', 'user_id'];
  keysArr.forEach((item) => {
    if (!reqBodykeys.includes(item)) {
      missingKeys += `${item}`;
    }
  });
  if (missingKeys.length !== 0) {
    res.status(400).json({
      "message": `Missing ${missingKeys}.`,
    });
    return;
  }
  res.status(200).json({
    "id": user_id,
  });
  return;
});
// leave space for Internal Server Error
module.exports = router;
