import type { StellariumResource } from "stellarium-ts";

export function strings(baseUrl: string): StellariumResource {
  return {
    id: 1,
    baseUrl,
    metadata: {},
    path: "sh.stellarium.stdlib",
    name: "Strings",
    functions: [
      {
        name: "length",
        parameters: [{ name: "of", type: "string" }],
        returnType: "int32",
        exec: async (args) => {
          const string = args.find((arg) => arg.name === "of")?.value;
          return typeof string === "string" ? string.length : 0;
        },
      },
    ],
  };
}
