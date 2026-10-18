import "dotenv/config";
import Fastify from "fastify";
import { StellariumNode } from "stellarium-ts";
import { strings } from "./strings.js";

const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3200;
const baseUrl = process.env.BASE_URL ?? `http://0.0.0.0:${port}`;

const node = new StellariumNode();
await node.register(strings(baseUrl));

const fastify = Fastify({ logger: true });
await node.start(fastify, { port, host: "0.0.0.0" });
