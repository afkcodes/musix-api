
import { FastifyInstance } from "fastify"
import { homeController } from "./home.controller"

const homeRoute = async (fastify: FastifyInstance) => {
  fastify.get('/', homeController)

}

export { homeRoute }
