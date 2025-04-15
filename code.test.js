// Kane Kriz
// UWYO COSC 3020 Algorithms
// 15 April 2025
// Detecting Cycles Exercise - test js file
//
//


//


const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');


//


function test() 
{
    var testGraph_1 = {};
    assert.strictEqual(hasCycle(testGraph_1), false);

  ////

    var testGraph_2 = 
    {
        A: ['A']
    };
    assert.strictEqual(hasCycle(testGraph_2), true);

  ////

    var testGraph_3 = 
    {
        A: ['B'],
        B: []
    };
    assert.strictEqual(hasCycle(testGraph_3), false);

  ////

    var testGraph_4 = 
    {
        A: ['B'],
        B: ['A']
    };
    assert.strictEqual(hasCycle(testGraph_4), true);

  ////

    var testGraph_5 = 
    {
        A: ['B'],
        B: [],
        C: ['D'],
        D: ['C']
    };
    assert.strictEqual(hasCycle(testGraph_5), true);

  ////

    var testGraph_6 = 
    {
        A: ['B', 'C'],
        B: ['D'],
        C: ['D'],
        D: ['E', 'F'],
        E: ['B'],
        F: []
    };
    assert.strictEqual(hasCycle(testGraph_6), true);

////
  
    var testGraph_7 = 
    {
        A: ['B', 'C', 'D', 'E'],
        B: ['A', 'C', 'D', 'E'],
        C: ['A', 'B', 'D', 'E'],
        D: ['A', 'B', 'C', 'E'],
        E: ['A', 'B', 'C', 'D']
    };
    assert.strictEqual(hasCycle(testGraph_7), true);
}

//

test();
