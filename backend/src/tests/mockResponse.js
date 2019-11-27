module.exports = function mockResponse() {
  const res = {};
  res.locals = {};
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.send = (msg) => {
    res.body = msg;
    return res;
  };
  res.json = (result) => ({
    ...result,
  });
  return res;
};
