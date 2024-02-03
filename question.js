const data = [
  {
    question: 'What is the purpose of the "break" statement in a loop?',
    options: [
      "To end the program execution",
      "To skip the current iteration and move to the next one",
      "To exit the loop prematurely",
      "To pause the loop temporarily",
    ],
    correct: "To exit the loop prematurely",
  },
  {
    question: "Which of the following is not a valid variable name in Python?",
    options: ["my_variable", "_my_variable", "2nd_variable", "variable_2"],
    correct: "2nd_variable",
  },
  {
    question:
      "What is the time complexity of accessing an element in an array by its index?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correct: "O(1)",
  },
  {
    question:
      "Which sorting algorithm has the best time complexity in the average case?",
    options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"],
    correct: "Quick Sort",
  },
  {
    question: "Which data structure uses the LIFO principle?",
    options: ["Queue", "Stack", "Linked List", "Heap"],
    correct: "Stack",
  },
  {
    question: "What is the time complexity of the binary search algorithm?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correct: "O(log n)",
  },
  {
    question: "In a linked list, what is the purpose of the 'head' node?",
    options: [
      "To store the value of the last node",
      "To represent an empty list",
      "To store the value of the first node",
      "To point to the middle node",
    ],
    correct: "To store the value of the first node",
  },
  {
    question:
      "What is the purpose of the 'merge' operation in the merge sort algorithm?",
    options: [
      "To combine two sorted arrays into a single sorted array",
      "To split an array into two halves",
      "To find the minimum element in an array",
      "To search for an element in an array",
    ],
    correct: "To combine two sorted arrays into a single sorted array",
  },
  {
    question: "What is the primary purpose of a hash table?",
    options: [
      "Sorting",
      "Searching",
      "Mapping keys to values",
      "Data encryption",
    ],
    correct: "Mapping keys to values",
  },
  {
    question:
      "In a binary tree, what is the maximum number of nodes at level 3?",
    options: ["4", "8", "16", "32"],
    correct: "8",
  },
  {
    question: "What is the purpose of the 'Dijkstra's algorithm'?",
    options: [
      "To find the shortest path in a weighted graph",
      "To find the minimum spanning tree in a graph",
      "To sort an array of elements",
      "To perform graph coloring",
    ],
    correct: "To find the shortest path in a weighted graph",
  },
  {
    question:
      "What is the purpose of the 'merge' operation in the merge sort algorithm?",
    options: [
      "To combine two sorted arrays into a single sorted array",
      "To split an array into two halves",
      "To find the minimum element in an array",
      "To search for an element in an array",
    ],
    correct: "To combine two sorted arrays into a single sorted array",
  },
  {
    question: "What is the space complexity of an algorithm?",
    options: [
      "The amount of time an algorithm takes to execute",
      "The amount of memory an algorithm uses",
      "The efficiency of the algorithm",
      "The size of the input data",
    ],
    correct: "The amount of memory an algorithm uses",
  },
  {
    question:
      "What is the time complexity of the breadth-first search (BFS) algorithm for a graph with 'V' vertices and 'E' edges?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
    correct: "O(V + E)",
  },
  {
    question: "What is the time complexity of a linear search algorithm?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correct: "O(n)",
  },
  {
    question:
      "What is the main advantage of using a priority queue over a regular queue?",
    options: [
      "Faster insertion",
      "Faster deletion",
      "Elements are processed in order of priority",
      "Constant time access",
    ],
    correctAnswer: "Elements are processed in order of priority",
  },
  {
    question:
      "Which data structure is typically used for implementing a priority queue?",
    options: ["Queue", "Stack", "Heap", "Linked List"],
    correct: "Heap",
  },
  {
    question:
      "What is the time complexity of randomly accessing an element in an array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correct: "O(n)",
  },
  {
    question:
      "Which of the following is an advantage of a doubly linked list over a singly linked list?",
    options: [
      "Simplicity",
      "Memory efficiency",
      "Bidirectional traversal",
      "Constant time access to any element",
    ],
    correct: "Bidirectional traversal",
  },
  {
    question: "What is a base case in a recursive function?",
    options: [
      "The case where the function returns a value",
      "The case where the function calls itself",
      "The case where the function terminates",
      "The case where the function has a constant time complexity",
    ],
    correct: "The case where the function terminates",
  },
];

export { data };
