
const convertPropsToPropTypes = (propString) =>
  propString.split(',').reduce((acc, item) => {
    const propName = item.trim()
    //default type
    let type = 'string'

    //Use custom types for know props
    if( propName === 'children' ) type = 'oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])'
    if( propName.includes('on') ) type = 'func'
    if( propName.includes('style') ) type = 'object'
    if( propName === 'enabled' ) type = 'boolean'
    if( propName === 'active' ) type = 'boolean'

    acc.push(`${propName}: PropTypes.${type},`)
    return acc
  },[]).join('\n  ') //return and 2 space indent

const convert = (value) => {

  // const componentName = value.match(/(?<=const\s+).*?(?=\s+=)/gs)[0]
  const componentName = value.substring(
    value.indexOf("const") + 5,
    value.indexOf("=")
  ).trim()
  // const propString = value.match(/(?<={\s+).*?(?=\s+})/gs)[0]
  const propString = value.substring(
    value.indexOf("{") + 1,
    value.indexOf("}")
  ).trim()
  const propTypeString = convertPropsToPropTypes(propString)

//Return formated propstypes string
return `
${componentName}.propTypes = {
  ${propTypeString}
}
`
}

export default convert
