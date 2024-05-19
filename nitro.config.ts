export default defineNitroConfig({
  srcDir: "server",

  routeRules: {
    "/api/**": { cors: true },
  },

  imports: {
    imports: [
      { from: "zod", name: "z" },
    ],
  },
})
