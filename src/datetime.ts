import type { StellariumResource } from "stellarium-ts";

export function datetime(baseUrl: string): StellariumResource {
  return {
    id: 1,
    baseUrl,
    metadata: {},
    path: "sh.stellarium.stdlib",
    name: "Datetime",
    description: "A collection of datetime functions.",
    website: "https://github.com/qualletio/stellarium-stdlib",
    functions: [
      {
        name: "now",
        parameters: [],
        returnType: "string",
        description: "Returns the current UTC datetime in ISO 8601 format.",
        exec: async (_) => {
          return new Date().toISOString();
        },
      },
    ],
  };
}
