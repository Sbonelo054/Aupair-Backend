var jwt = require("jsonwebtoken");

function tokenAuthenticate(req, res, next) {
    var token = req.headers["accesstoken"];
    var secret = "verygoodsecretandabunhofrandomtextthatnobodycaneverydecipherinabillionyears";
    if(!token){
        return res.status(403).send({auth: false, message: "No token provided"});
    }

    jwt.verify(token, secret, function(err, decoded) {
        if(err){
            return res.status(401).send({auth: false, message: "Authorisation failed"});
        }
        res.userId = decoded.id;
        next();
    });
}

module.exports = tokenAuthenticate;