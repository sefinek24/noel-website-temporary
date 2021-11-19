module.exports = {
	apps : [{
		name            : 'noel-website-temporary',
		script          : './index.js',
		log_date_format : 'HH:mm:ss, DD.MM.YYYY',
		error_file      : '/home/ubuntu/discord/logs/noel-website-temporary/error.log',
		out_file        : '/home/ubuntu/discord/logs/noel-website-temporary/out.log',
	}],

	deploy : {
		production : {
			user        : 'node',
		},
	},
};