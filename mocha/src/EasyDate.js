class EasyDate {
  constructor(str) {
    this.base = new Date()
    const day = this.base.getDay()
    this.base.setDate(day + 30*str[1])
  }
  toDate() {
    return this.base
  }
  static isLeapYear(y) {
    return y % 4 === 0
  }
  static toDuble(number) {
    return number > 9 ? number.toString() : ('0' + number)
  }
}

module.exports = EasyDate