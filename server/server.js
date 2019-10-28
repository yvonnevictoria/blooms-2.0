'use strict';
const HelloWorldHandler = require('./handlers/helloWorldHandler');
const BloomHandler = require('./handlers/bloomHandler');

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 4000,
        host: 'localhost',
        routes: {
            cors: true
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: HelloWorldHandler.hello
    });

    server.route({
        method: 'POST',
        path: '/add',
        handler: BloomHandler.add
    });

    server.route({
        method: 'GET',
        path: '/get',
        handler: BloomHandler.get
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
