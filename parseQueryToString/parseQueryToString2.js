const assert = require('assert');

// Write a function that takes in a query object and returns the query string 

function parseQueryToString(query) {
    let str = `?`;
    for (key in query) {
        str+= `${key}=${query[key]}&`
    }
  return str.slice(0,-1)
}

const query = {author: 'Alice', title: 'Travel'};
const actual = parseQueryToString(query); 
assert.strictEqual(actual, '?author=Alice&title=Travel');


const query2 = {author: 'Alice', title: 'Travel', isbn: '123'};
const actual2 = parseQueryToString(query2); 
assert.strictEqual(actual2, '?author=Alice&title=Travel&isbn=123');