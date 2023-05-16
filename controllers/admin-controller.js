const jwt = require('jsonwebtoken')
const sequelize = require('sequelize')

const adminController = {
  login: (req, res) => {
    const { login, password } = req.body
    const token = jwt.sign(req.user, process.env.JWT_SECRET, { expiresIn: '3d' })

    // 假設有個包含所有使用者的資料表名為User
    User.findOne(
      sequelize.literal(`(
        SELECT * FROM User
        WHERE User.login = 'admin' AND User.password = 'Admin&8181'
      )`)
    )
        .then(user => {
          if (user) {
            return res.json({ token })
          } else {
            return res.status(400).json({ error: 'Login failed' })
          }
        })
  }

}

module.exports = adminController