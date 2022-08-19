export const loginController = (req, res) => {
    const token = req.token;
    return res
    .status(200)
    .send({message: "login successful", access_token:token});
  
};