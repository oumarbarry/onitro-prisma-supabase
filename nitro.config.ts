export default defineNitroConfig({
  srcDir: "src",

  routeRules: {
    "/api/**": { cors: true },
  },

  imports: {
    imports: [
      { from: "zod", name: "z" },
    ],
  },
})
