/* EXPECTED RESULT FORMAT:
{ operator: 'OR',
  condition1: { type: 'equals', filter: 'BE', filterType: 'text' },
  condition2: { type: 'equals', filter: 'LUX', filterType: 'text' },
  condition3: { type: 'equals', filter: 'FR', filterType: 'text' } } 
*/

const initialValues = ["BE", "LUX", "FR"];
let operator = { operator: "OR" };

const queries = initialValues.map((target, index) => {
  let queryNumber = "condition" + (index + 1);
  return {
    [queryNumber]: { type: "equals", filter: target, filterType: "text" }
  };
});

console.log(queries)

console.log(queries.forEach(e => {
   return Object.entries(e).map((e) => {
     console.log(e)
   })
}))


/*  const queriesR = selectedTargets.reduce((acc, target, index) => {
    let queryNumber = "condition" + (index + 1)
    acc[queryNumber] = {type: 'equals', filter: target, filterType: "text"}
    return acc 
 }, operator)

 console.log(queriesR) */
