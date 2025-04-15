# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.



/////


Name: Kane Kriz

Start Date: 12 April 2025

Last Edited: 15 April 2025

Feedback Request 1 Date: 15 April 2025


/////


Response:


The implementation checks for loops using depth first search, keeping track of visited nodes during each later recursive call to check if it finds a node it has already seen within a single traversal.

The function begins by initializing the `visitedNodes` and `recursionStack` tracking objects.

This initialization requires constant work.

The primary functionality of the implementation resides in the recursive `checkNode` helper function.

Within `checkNode`, the implementation processes each node exactly once through the outer loop in the main `hasCycle` function.

For each node, the implementation marks it as visited and adds it to the recursion stack before examining its outgoing edges. 

The adjacency list iteration processes each edge exactly once when visiting its source node, as seen in the loop `for(var i = 0; i < outEdges.length; i++)`. 

The algorithm detects cycles when it finds a node that already exists in the current recursion path.

This is accomplished by `else if(recursionStack[nextNode])` that returns true when finding such a node.

The worst case complexity for this implementation occurs when the algorithm must visit every vertex and edge within the input graph.

Each vertex is processed exactly once through the recursive calls, contributing $Θ(V)$ work where V is the number of vertices.

Each edge is considered once when processing its respective source vertex, contributing $Θ(E)$ work where E is the number of edges.

The recursion stack operations and visited checks each require $O(1)$ time per operation, but since they must execute for every node and edge, such work contributes to the overall $Θ(V + E)$ complexity.

Due to this, the overall worst case time complexity of the implementation is $Θ(V + E)$.

This is due to the fact that in the worst case, the algorithm must cover and process all vertices and edges within the graph.

Whether or not a cycle is detected is irrelevant, as the worst case assumes that it will be found upon covering all nodes within the considered input graph.



////



Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Citations:

Conceptual logic help from the below 2 sources.
I intentionally did not consult the listed JS code on either link.

“Detect Cycle in a Directed Graph.” GeeksforGeeks, 5 Apr. 2025, www.geeksforgeeks.org/detect-cycle-in-a-graph/.

“Detect Cycle in an Undirected Graph.” GeeksforGeeks, 7 Apr. 2025, www.geeksforgeeks.org/detect-cycle-undirected-graph/.
