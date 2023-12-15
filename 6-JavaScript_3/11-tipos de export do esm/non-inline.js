function group() {
  console.log('Export nomeado não-inline (Agrupado')
}

function exportDefault() {
  console.log('Export default não-inline')
}

export { group }

export default exportDefault
