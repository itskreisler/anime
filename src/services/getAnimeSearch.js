
const baseURL = 'https://api.jikan.moe/v4/anime'
const queryString = (params) => new URLSearchParams(params).toString()
export const getAnimeSearch = async ({ q = String, limit = Number(10) }) => {
  return await (await fetch(`${baseURL}?${queryString({ q })}`)).json()
}
