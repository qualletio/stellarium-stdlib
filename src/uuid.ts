import type { StellariumResource } from "stellarium-ts";
import crypto from "node:crypto";

export function uuid(baseUrl: string): StellariumResource {
  return {
    id: 1,
    baseUrl,
    metadata: {},
    path: "sh.stellarium.stdlib",
    name: "Uuid",
    description: "A collection of uuid functions.",
    website: "https://github.com/qualletio/stellarium-stdlib",
    functions: [
      {
        name: "new",
        parameters: [],
        returnType: "string",
        description: "Generates a new v4 UUID.",
        exec: async (_) => {
          return crypto.randomUUID();
        },
      },
    ],
  };
}
