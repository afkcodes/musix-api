import { FastifyReply, FastifyRequest } from "fastify";
import { homeService } from "./home.services";

export const homeController = async (req: FastifyRequest, res: FastifyReply) => {
  const message = await homeService();
  res.send({ message })
}