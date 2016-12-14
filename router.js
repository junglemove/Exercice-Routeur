/**
 * Created by Administrateur on 14/12/2016.
 */
const routes = require("./routes");

module.exports.dispatch = (req, resp) => {
    let url = req.url;
    let method = req.method;

    var match = routes.find(route => route.url ===url && route.method === method); // boucle sur chaques elements du tableau

    if(!match){
        res.statusCode = 404;
        return res.end("404")
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html, charset=utf-8');
    match.callback(req, res);
}