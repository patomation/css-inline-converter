//String should be formatted like this: my-cool-value and it will be transformed to myCoolValue
const camelCase = (string) => {
  return string
  .replace(/-/g,' ') //replace dashed with spaces
  .trim() //remove leading and trailing white space
  .replace(
    //Make sure everything is lowercase and formatted
    /(?:^\w|[A-Z]|\b\w)/g,
    //Don't capitalize the first word only those after it
    (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()
  )
  .replace(/\s+/g, '')
}

//
//Convert this css
//
// float: left;
// margin-right: 1rem;
// margin-bottom: 1rem;
// -webkit-stuff: nice
///
//Into inline css for react
//
// float: 'left',
// marginRight: '1rem',
// marginBottom: '1rem',
// webkitStuff: 'nice',

//Prop value is string of css formatted styles
const convert = (value) =>
  value.split('\n').reduce( (acc, item) => {
      //ignore empty strings
      if(item.length > 0) {
        //Split the key value pare
        const [ key, value ] = item.split(':')
        console.log('-->', key, value);
        //Push inline css formatted string
        if(key) acc.push(`${camelCase(key)}: '${value.trim().replace(/,|'|;/g,'')}',`) //format
      }
      //Return accumulator
      return acc
  },[]).join('\n') //Convert accumulator array into string with return spaces


export default convert
