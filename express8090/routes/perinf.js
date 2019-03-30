var express = require('express');
var router = express.Router();
const tokenlist = ['11', '222', '333']
/* GET home page. */
router.post('/', function (req, res, next) {
    if (tokenlist.indexOf(req.headers['token']) != -1) {
        res.status(200).send({ data: { mes: 'OK', status: 0 } });
    } else {
        res.status(401).send({
            response: {
                status: 401
            }
        });
    }

});

module.exports = router;