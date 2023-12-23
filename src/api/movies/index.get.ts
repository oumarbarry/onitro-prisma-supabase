export default defineEventHandler(async () => {
  try {
    return await db.movie.findMany()
  }
  catch { throw createError({ statusCode: 500, statusMessage: "Something went wrong." }) }
})
