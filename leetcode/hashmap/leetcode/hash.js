function hash(key) {
  let len = key.length
  return key.substr(len-2, len)
}

// 基于table 的散列 key: value