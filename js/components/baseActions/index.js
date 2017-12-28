class BaseActions {
  constructor(parent) {
    if (!parent) return
    if (this) {
      const prototypes = Object.getPrototypeOf(this)
      Object.getOwnPropertyNames(prototypes).forEach((name) => {
        if (typeof this[name] === 'function') {
          parent[name] = this[name].bind(parent)
        }
      })
    }
  }
}

module.exports = BaseActions