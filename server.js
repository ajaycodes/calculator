var express = require('express'), routes = require('./routes'), calculator = require('./routes/calculator');

var server = express();
var renderGUI = express.Router();
var api = express.Router();

server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));
server.use('/', renderGUI);
server.use('/api', api);

/** API Middleware* */
api.use(function(req, res, next) {
	console.log("API hit : ", req.url);
	next();
});

/** Render GUI Middleware* */
renderGUI.use(function(req, res, next) {
	console.log("Request For : ", req.url);
	next();
});

renderGUI.get('/', routes.index);
api.get('/add/:first/:second', calculator.add);
api.get('/subtract/:first/:second', calculator.subtract);
api.get('/multiply/:first/:second', calculator.multiply);
api.get('/divide/:first/:second', calculator.divide);

server.listen(8080, function() {
	console.log("Server Started ... ");
});