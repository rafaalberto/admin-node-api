const restify = require('restify');
const server = restify.createServer();
const port = 3000;

server.use(restify.plugins.bodyParser({
    mapParams: true
}));

server.listen(port, async () => {
    await require('../src/routes/routes')(server);
    console.log(`Server running at port ${port}`)
});