import type { StellariumResource } from "stellarium-ts";

export function strings(baseUrl: string): StellariumResource {
  return {
    id: 1,
    baseUrl,
    metadata: {},
    path: "sh.stellarium.stdlib",
    name: "Strings",
    description: "A collection of string functions.",
    website: "https://github.com/qualletio/stellarium-stdlib",
    functions: [
      {
        name: "length",
        parameters: [{ 
          name: "of", 
          type: "string",
          description: "The string to get the length of.",
        }],
        returnType: "int32",
        description: "Returns the length of a given string in `int32`.",
        exec: async (args) => {
          const string = args.find((arg) => arg.name === "of")?.value;
          return typeof string === "string" ? string.length : -1;
        },
      },
    ],
  };
}
