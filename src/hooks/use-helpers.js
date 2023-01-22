export const today = new Date()
export const getWeekDay = (date, lang = 'es-ES', args = { weekday: 'long' }) =>
  date.toLocaleDateString(lang, { ...args })
export const setWeekDay = (i, date = new Date()) => {
  date.setDate(date.getDate() - date.getDay() + i)
  return date
}
export const hookDays = Array(7)
  .fill(new Date())
  .map((day, i) => {
    // day.setDate(day.getDate() - day.getDay() + i)
    setWeekDay(i, day)
    return {
      name: {
        long: { es: getWeekDay(day), en: getWeekDay(day, 'en-EN') },
        short: { es: getWeekDay(day, 'es-ES', { weekday: 'short' }), en: getWeekDay(day, 'en-EN', { weekday: 'short' }) }
      },
      isToday: day.toDateString() === today.toDateString()
    }
  })
