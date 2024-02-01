import { log } from "./log.js"

export const requestLogger = (req, res, next) => {
  try {
    const message = `${req.method}\t${req.headers.host}\t${req.url}\t` 
    log(message, 'reqLogs.log')
    next()
  }
  catch (err) {
    console.log(err)
  }
}
