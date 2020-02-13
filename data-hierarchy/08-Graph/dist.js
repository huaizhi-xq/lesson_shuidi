// 字典的封装
function Dictionay() {
    this.items = {}

    Dictionay.prototype.set = function(key, value) {
        this.items[key] = value
    }

    Dictionay.prototype.has = function(key) {
        return this.items.hasOwnProperty(key);
    }
    Dictionay.prototype.remove = function(key) {
        if (!this.items.has(key)) return false

        delete this.items[key];
        return true
    }

    Dictionay.prototype.clear = function() {
        this.items = {}
    }

    Dictionay.prototype.size = function() {
        return Object.keys().length
    }

    Dictionay.prototype.get = function(key) {
        return this.has(key) ? this.items[key] : undefined
    }

    Dictionay.prototype.keys = function() {
        return Object.keys(this.items)
    }

    Dictionay.prototype.values = function() {
        return Object.values(this.items);
    }
}

// var d = new Dictionay();

// d.set('A', [])
// d.get('A').push('aa')
// console.log(d.get)

module.exports = {
    Dictionay
}