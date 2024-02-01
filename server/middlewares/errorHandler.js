import { log } from "./log.js"

export const errorHandler = (err, req, res, next) => {
  const errorMessage = `${'Error: ' + err.message || err}\t` 
  const requestInfo = `${req.method}\t${req.headers.host}\t${req.url}\t`
  const message = errorMessage + requestInfo
  log(message, 'errLogs.log')

  const status = res.statusCode ? res.statusCode : 500 // server error
  res.setStatus(status)
  res.json({ message: err.message, isError: true })
}
