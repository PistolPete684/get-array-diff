function arrayDiff(a, b) {

  //Use filter to create a new array that passes a define 'test'
  //Feed in the 'test' to the filter for elements in a that are not in b
  return a.filter(element => !b.includes(element));
  
}