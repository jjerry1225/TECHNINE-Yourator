const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin-controller')


router.get('/hello', (req, res) => {
  res.json('Hello World')
})

router.post('/sortnum', (req, res) => {
  const { sortnum } = req.body
  
  // 除了檢視是否是array格式外，也排除空陣列的情形，因若為空陣列則不需多進行排序的動作。
  if(!Array.isArray(sortnum) || sortnum.length === 0) {
    return res.status(400).json({ error: 'Must need to provide an Array with numbers.' })
  }

  sortnum.sort((a, b) => a - b)
  return res.json({ sortnum })
})

router.post('/login', adminController.login)

module.exports = router