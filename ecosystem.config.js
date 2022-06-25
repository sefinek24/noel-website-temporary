module.exports = {
	apps: [{
		name            : 'temporary-website',
		script          : './index.js',

		log_date_format : 'HH:mm:ss, DD.MM.YYYY',
		error_file      : '/home/ubuntu/logs/www/temporary-website/error.log',
		out_file        : '/home/ubuntu/logs/www/temporary-website/out.log',
	}],
};