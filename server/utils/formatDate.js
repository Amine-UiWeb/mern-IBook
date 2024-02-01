export const formatDate = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes().toString().padStart(2, '0')

  const dateTime = `${year}-${month}-${day} ${hour}:${minute}`
  return dateTime
}