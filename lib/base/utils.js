import { createRequire } from "module"
const require = createRequire(import.meta.url)

export const utils = {
  getData: (filename) => {
    return require(`#data/${filename}`)
  }
}