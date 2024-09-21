export const createRes = (req, res, statusCode, data, error = null) => {
  return res
    .status(statusCode)
    .json({ 
        data, 
        status: statusCode, 
        error, 
        path: req.url 
    });
};
