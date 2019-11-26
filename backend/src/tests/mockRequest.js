module.exports = function mockRequest(headers = {}, body = {}) {
  return {
    headers,
    body,
  };
};
