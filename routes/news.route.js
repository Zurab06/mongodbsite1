const {Router} = require('express')
const {newsController}= require('../controllers/news.controller')

const router = Router()

router.post('/news', newsController.postNews)
module.exports = router