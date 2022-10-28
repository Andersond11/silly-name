import Table from "#base/table.js";

export default class Name {
  
  constructor() {
    this.firstNames = new Table(`names/first-names.json`)
    this.lastNames = new Table(`names/last-names.json`)
  }

  generate() {
    this.firstName = this.firstNames.getRandom()
    this.lastName = this.lastNames.getRandom()

    return `${this.firstName} ${this.lastName}`
  }

}