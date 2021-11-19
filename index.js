const express = require('express');
const helmet = require('helmet');
const { port } = require('./config.js');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.use(helmet.hidePoweredBy());
app.use(express.static('public'));

app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.status(423).render(path.resolve('./ejs/index.ejs'));
	console.log('GET /');
});

app.get('/server', (req, res) => {
	res.redirect('https://discord.gg/uV6HsqxBBC');
	console.log('REDIRECT /server');
});

app.get('/serverUrl', (req, res) => {
	res.redirect('https://discord.gg/uV6HsqxBBC');
	console.log('REDIRECT /serverUrl');
});

app.use((req, res) => {
	res.status(404).send('<h1>ERROR 404</h1>Podana strona nie istnieje.<br><br><a href="/">Strona główna</a>');
	console.log(`Cannot GET: ${req.originalUrl} [404]`);
});

app.use((err, req, res, next) => {
	res.status(500).send('<h1>ERROR 500</h1>Coś poszło nie tak.');
	console.log(`Cannot GET: ${req.originalUrl} [500]\n${err}`);

	return next;
});

app.listen(port, null, null, () => console.log(`Tymczasowa strona została uruchomiona na porcie ${port}.`));