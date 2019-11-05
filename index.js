/* const myCustomObject = (type, filter, filterType) => {
    const object = {queryNumber: { type, filter, filterType}} 
    console.log(object)
}

myCustomObject("equals", "BE", "text")
 */

const selectedTargets = ['BE', 'LUX', 'FR']

const queries = selectedTargets.map((target, index) => {
    let queryNumber = "condition" + (index + 1)
    return {[queryNumber]: {type: 'equals', filter: target, filterType: "text"}}
})
let operator = {operator: 'OR'}


/* queries.forEach(e => {
   return Object.entries(e).map(([k, v]) => {
     operator[k] = v
   })
})

console.log(operator)
 */

 const queriesR = selectedTargets.reduce((acc, target, index) => {
    let queryNumber = "condition" + (index + 1)
    acc[queryNumber] = {type: 'equals', filter: target, filterType: "text"}
    return acc 
 }, operator)

 console.log(queriesR)