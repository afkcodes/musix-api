import fastify from 'fastify';
import { homeRoute } from './modules/home/home.routes';

function createServer() {
  const server = fastify({ logger: true, trustProxy: true });

  server.get('/healthcheck', async () => ({ status: 'OK' }));

  // Registering routes
  server.register(homeRoute, { prefix: '/api/home', })

  return server;
}

export default createServer;