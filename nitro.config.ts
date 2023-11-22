export default defineNitroConfig({
  srcDir: "src",

  routeRules: {
    "/api/**": { cors: true },
  },

  imports: {
    presets: [
      { from: "zod", imports: ["z"] },
    ],
  },
})
