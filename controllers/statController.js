const Work = require('../models/userWork');

// GET STATS ROUTE
exports.getStats = (req, res) => {
	Work.find({ author: req.user._id, startTime: { "$gte": new Date(Date.now() - 1000 * 60 * 60 * 24 * 30), "$lt": new Date() } }, null, { sort: { startTime: 1 } }, (err, final) => {
		if (err) {
			console.log(err);
		} else {
			res.render("statistics", { final: final });
		}
	})
};