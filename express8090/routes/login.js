var express = require('express');
var router = express.Router();
const accout = {
    accout: '111',
    pwd: '111'
}
/* GET home page. */
router.get('/', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    res.redirect('http://localhost:3000')
});
router.post('/', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    console.log(req.body.accout, req.body.pwd);
    //console.log(req.headers);
    //console.log(JSON.parse(req.body))
    if (req.body.accout == accout.accout && req.body.pwd == accout.pwd) {
        res.status(200).send({data:{message:'right'},status:0})
    }else{
        res.status(200).send({data:{message:'账号或密码错误'},status:3})
    }
});;
router.options('/', function (req, res, next) {
    console.log(req.headers)
})
module.exports = router;