// Kane Kriz
// UWYO COSC 3020
// 15 April 2025
// Detecting Cycles Exercise - primary js file
//



//



function hasCycle(graph) 
{
    var visitedNodes = {};
    var recursionStack = {};
    
    function checkNode(node, adjList) 
    {
        //process unvisited nodes
        if(!visitedNodes[node]) 
        {
            //current node set visited, add to stack
            visitedNodes[node] = true;
            recursionStack[node] = true;
            
            var outEdges;
            
            if(adjList[node] == undefined) 
            {
                outEdges = [];
            }
                
            else 
            {
                outEdges = adjList[node];
            }
            
            for(var i = 0; i < outEdges.length; i++) 
            {
                var nextNode = outEdges[i];
                
                if(!visitedNodes[nextNode]) 
                {
                    if(checkNode(nextNode, adjList)) 
                    {
                        return true;
                    }
                } 
                    
                else if(recursionStack[nextNode]) 
                {
                    return true;
                }
            }
            
            recursionStack[node] = false;
        }
        return false;
    }

    var adjList = graph; 

    //cover all nodes
    for(var node in adjList) 
    {
        if(checkNode(node, adjList)) 
        {
            return true;
        }
    }
    
    return false; //no cycles found
}


//
