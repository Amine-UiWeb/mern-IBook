import path from "path"
import fs from "fs"
import fsPromises from "fs/promises" 
import { randomUUID } from "crypto"

import { __dirname } from "../server.js"
import { formatDate } from "../utils/formatDate.js"

export const log = async (message, targetFile) => {
  const dateTime = formatDate(new Date())
  const logInfo = `${dateTime} ${randomUUID()} ${message}\n`

  try {
    // create the logs folder if it doesn't exist
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, 'logs'))
    }
    // write the logInfo to the targetFile
    await fsPromises.appendFile(
      path.join(__dirname, 'logs', targetFile),
      logInfo
    )
  }
  catch (err) { console.log(err) }
}
