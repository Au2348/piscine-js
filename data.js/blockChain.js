// Fonction hashCode fournie
const hashCode = str =>
  [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0)
    .toString(36)

// Ta fonction blockChain
const blockChain = (data, prev = { index: 0, hash: "0" }) => {
  const index = prev.index + 1
  const hash = hashCode(`${index}${prev.hash}${JSON.stringify(data)}`)

  const block = {
    index,
    hash,
    data,
    prev,
    chain: (nextData) => blockChain(nextData, block)
  }

  return block
}
