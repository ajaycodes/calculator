/**
 * index page
 */
exports.index = function(req, res) {
	res.render('index', {
		title : 'Calculator',
		message : 'Calculator'
	});
}