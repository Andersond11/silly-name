import { utils } from "#base/utils.js"

export default class Table {

  constructor(filename) {
    this.data = utils.getData(filename)
  }
  
  getRandom() {
    return this.data[Math.floor(Math.random() * this.data.length)]
  }
}