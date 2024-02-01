
// @desc Register user
// @route POST /auth/register
// @access Public
export const register = (req, res) => {
  console.log(req.url)
  res.status(200).json({ message: 'User Created.'})
}

// @desc Login user
// @route POST /auth/login
// @access Public
export const login = (req, res) => {
  res.status(200).json({ message: 'User logged in seccessfully.'})
}

// @desc Refresh Token
// @route POST /auth/refresh
// @access Public
export const refresh = (req, res) => {
  res.status(200).json({ message: 'Refresh Token.'})
}

// @desc Logout user
// @route POST /auth/logout
// @access Public
export const logout = (req, res) => {
  res.status(200).json({ message: 'User logged out seccessfully.'})
}
