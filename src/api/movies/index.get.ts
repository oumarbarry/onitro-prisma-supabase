export default defineEventHandler(async () => {
  try {
    return await prisma.movie.findMany()
  }
  catch { throw createError({ statusCode: 500, statusMessage: "Something went wrong." }) }
})
