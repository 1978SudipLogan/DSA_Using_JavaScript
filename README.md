# 🚀 DSA with JavaScript

A structured repository for learning and practicing **Data Structures & Algorithms (DSA) using JavaScript**, organized **pattern-wise**.

The goal is not just to solve problems, but to understand the **underlying patterns**, recognize when to use them, and build strong problem-solving skills for technical interviews.

---

## 🎯 Goals

- Build strong DSA fundamentals.
- Learn DSA **pattern-wise** instead of randomly solving problems.
- Understand the intuition behind each pattern.
- Solve problems using JavaScript.
- Improve time and space complexity analysis.
- Learn to identify the right pattern from a problem statement.
- Maintain a consistent problem-solving habit.
- Prepare for technical interviews and product-based companies.

---

# 🗺️ DSA Roadmap

The repository will be organized into the following patterns and topics.

## 1. Arrays & Strings

- [ ] Array basics
- [ ] String manipulation
- [ ] Frequency counting
- [ ] Prefix Sum
- [ ] Difference Array

---

## 2. Two Pointers

**Pattern:** Use two pointers to process an array/string efficiently, usually reducing a nested-loop solution to `O(n)`.

### Topics

- [ ] Opposite-direction pointers
- [ ] Same-direction pointers
- [ ] Fast & slow pointers
- [ ] In-place array manipulation
- [ ] Pair-based problems
- [ ] Triplet problems

### Problems

- [ ] Two Sum II
- [ ] Valid Palindrome
- [ ] 3Sum
- [ ] Container With Most Water
- [ ] Remove Duplicates from Sorted Array
- [ ] Move Zeroes

---

## 3. Sliding Window

**Pattern:** Maintain a dynamic or fixed-size window over a contiguous portion of an array/string.

### Topics

- [ ] Fixed-size window
- [ ] Dynamic-size window
- [ ] Window expansion
- [ ] Window shrinking
- [ ] Frequency map
- [ ] Maximum/minimum window
- [ ] Longest/shortest subarray

### Problems

- [ ] Maximum Sum Subarray of Size K
- [ ] Longest Substring Without Repeating Characters
- [ ] Minimum Size Subarray Sum
- [ ] Longest Repeating Character Replacement
- [ ] Permutation in String
- [ ] Minimum Window Substring

---

## 4. Prefix Sum

- [ ] Basic Prefix Sum
- [ ] Range Sum
- [ ] Prefix Sum + Hash Map
- [ ] Subarray Sum Problems

---

## 5. Hashing

- [ ] HashMap / Object / Map
- [ ] Frequency counting
- [ ] Duplicate detection
- [ ] Complement lookup
- [ ] Grouping
- [ ] Hashing + Prefix Sum

---

## 6. Stack

- [ ] Stack basics
- [ ] Monotonic Stack
- [ ] Next Greater Element
- [ ] Previous Greater Element
- [ ] Next Smaller Element
- [ ] Valid Parentheses
- [ ] Expression problems

---

## 7. Queue & Deque

- [ ] Queue implementation
- [ ] Circular Queue
- [ ] Deque
- [ ] Monotonic Queue
- [ ] Sliding Window Maximum

---

## 8. Linked List

- [ ] Singly Linked List
- [ ] Doubly Linked List
- [ ] Reverse Linked List
- [ ] Fast & Slow Pointer
- [ ] Cycle Detection
- [ ] Merge Linked Lists
- [ ] Linked List Intersection

---

## 9. Binary Search

**Pattern:** Reduce the search space by half.

- [ ] Basic Binary Search
- [ ] Lower Bound
- [ ] Upper Bound
- [ ] First/Last Occurrence
- [ ] Search in Rotated Sorted Array
- [ ] Binary Search on Answer

---

## 10. Sorting

- [ ] Bubble Sort
- [ ] Selection Sort
- [ ] Insertion Sort
- [ ] Merge Sort
- [ ] Quick Sort
- [ ] Counting Sort
- [ ] Custom Sorting

---

## 11. Recursion

- [ ] Recursion fundamentals
- [ ] Base cases
- [ ] Recursive tree
- [ ] Backtracking introduction
- [ ] Subsets
- [ ] Subsequences
- [ ] Permutations

---

## 12. Backtracking

- [ ] Subsets
- [ ] Permutations
- [ ] Combination Sum
- [ ] N-Queens
- [ ] Sudoku
- [ ] Maze problems

---

## 13. Trees

- [ ] Binary Tree basics
- [ ] DFS
- [ ] BFS
- [ ] Preorder
- [ ] Inorder
- [ ] Postorder
- [ ] Level Order
- [ ] Height / Depth
- [ ] Diameter
- [ ] Balanced Tree

---

## 14. Binary Search Tree

- [ ] BST basics
- [ ] Search
- [ ] Insert
- [ ] Delete
- [ ] Validate BST
- [ ] Lowest Common Ancestor
- [ ] Kth Smallest Element

---

## 15. Heap / Priority Queue

- [ ] Min Heap
- [ ] Max Heap
- [ ] Heapify
- [ ] Top K problems
- [ ] Kth Largest / Smallest
- [ ] Merge K Sorted Lists

---

## 16. Greedy

- [ ] Greedy fundamentals
- [ ] Activity Selection
- [ ] Jump Game
- [ ] Gas Station
- [ ] Interval problems
- [ ] Scheduling problems

---

## 17. Graphs

- [ ] Graph representation
- [ ] BFS
- [ ] DFS
- [ ] Connected Components
- [ ] Cycle Detection
- [ ] Topological Sort
- [ ] Shortest Path
- [ ] Dijkstra
- [ ] Union Find / DSU
- [ ] Minimum Spanning Tree

---

## 18. Dynamic Programming

**Pattern:** Break a problem into overlapping subproblems and store previously calculated results.

### Topics

- [ ] Recursion → Memoization
- [ ] Tabulation
- [ ] 1D DP
- [ ] 2D DP
- [ ] Knapsack
- [ ] Subsequence DP
- [ ] Grid DP
- [ ] String DP

---

# 📂 Repository Structure

The repository will follow a pattern-based structure:

```text
dsa-javascript/
│
├── README.md
│
├── 01-arrays-strings/
│   ├── README.md
│   ├── problems/
│   └── solutions/
│
├── 02-two-pointers/
│   ├── README.md
│   ├── problems/
│   └── solutions/
│
├── 03-sliding-window/
│   ├── README.md
│   ├── problems/
│   └── solutions/
│
├── 04-prefix-sum/
│
├── 05-hashing/
│
├── 06-stack/
│
├── 07-queue-deque/
│
├── 08-linked-list/
│
├── 09-binary-search/
│
├── 10-sorting/
│
├── 11-recursion/
│
├── 12-backtracking/
│
├── 13-trees/
│
├── 14-bst/
│
├── 15-heap/
│
├── 16-greedy/
│
├── 17-graphs/
│
└── 18-dynamic-programming/
```

---

# 🧠 Problem-Solving Approach

For every problem, I will follow this process:

### 1. Understand the Problem

- What is the input?
- What is the expected output?
- What are the constraints?
- Are there edge cases?

### 2. Brute Force

First understand the straightforward solution.

```text
What would I do if performance didn't matter?
```

### 3. Identify the Pattern

Ask:

> Which DSA pattern can optimize this problem?

For example:

```text
Pair in sorted array
        ↓
Two Pointers
```

```text
Longest substring
        ↓
Sliding Window
```

```text
Search in sorted array
        ↓
Binary Search
```

### 4. Optimize

Analyze:

- Time Complexity
- Space Complexity
- Possible optimizations

### 5. Implement in JavaScript

Write a clean and readable solution.

### 6. Dry Run

Manually execute the algorithm with an example.

### 7. Review

Ask:

- Why does this pattern work?
- When should I use it?
- What are the edge cases?
- Can I solve a similar problem without looking at the solution?

---

# 📊 Complexity Analysis

Every solution should include:

### Time Complexity

Example:

```text
O(n)
```

### Space Complexity

Example:

```text
O(1)
```

Where possible, I will also compare the brute-force and optimized approaches.

Example:

| Approach    |  Time | Space |
| ----------- | ----: | ----: |
| Brute Force | O(n²) |  O(1) |
| Optimized   |  O(n) |  O(1) |

---

# 🟨 JavaScript Concepts for DSA

While solving DSA problems, I will also strengthen important JavaScript concepts.

- `Array`
- `String`
- `Map`
- `Set`
- `Object`
- `Stack`
- `Queue`
- `Priority Queue`
- Sorting
- Destructuring
- Spread / Rest
- Functions
- Closures
- Recursion
- Higher-order functions

---

# 📝 Problem Template

Each problem should follow a consistent structure:

```javascript
/**
 * Problem:
 *
 * Given an array of integers, find ...
 *
 * Example:
 * Input:  [1, 2, 3, 4]
 * Output: 10
 *
 * Pattern:
 * Prefix Sum
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(1)
 */

function solve(arr) {
  // solution
}
```

---

# 🔥 Progress Tracker

| Pattern             | Status         | Problems Solved |
| ------------------- | -------------- | --------------: |
| Arrays & Strings    | ⬜ Not Started |               0 |
| Two Pointers        | ⬜ Not Started |               0 |
| Sliding Window      | ⬜ Not Started |               0 |
| Prefix Sum          | ⬜ Not Started |               0 |
| Hashing             | ⬜ Not Started |               0 |
| Stack               | ⬜ Not Started |               0 |
| Queue & Deque       | ⬜ Not Started |               0 |
| Linked List         | ⬜ Not Started |               0 |
| Binary Search       | ⬜ Not Started |               0 |
| Sorting             | ⬜ Not Started |               0 |
| Recursion           | ⬜ Not Started |               0 |
| Backtracking        | ⬜ Not Started |               0 |
| Trees               | ⬜ Not Started |               0 |
| BST                 | ⬜ Not Started |               0 |
| Heap                | ⬜ Not Started |               0 |
| Greedy              | ⬜ Not Started |               0 |
| Graphs              | ⬜ Not Started |               0 |
| Dynamic Programming | ⬜ Not Started |               0 |

---

# 📈 Learning Rules

I will follow these rules while learning:

1. **Understand the pattern before solving problems.**
2. Start with easy problems.
3. Attempt a problem before looking at the solution.
4. Avoid memorizing solutions.
5. Understand **why** the algorithm works.
6. Always analyze time and space complexity.
7. Dry-run important problems manually.
8. Revisit problems that I couldn't solve.
9. Try to solve similar problems using the same pattern.
10. Focus on consistency rather than the number of problems solved.

---

# 🔁 Revision Strategy

Problems that are difficult or important will be marked for revision.

```text
Day 1  → Learn pattern
Day 2  → Re-solve without looking
Day 7  → Revisit
Day 14 → Revisit
Day 30 → Final revision
```

The objective is to develop **pattern recognition**, not just increase the number of solved problems.

---

# 🏆 Milestones

### 🥉 Beginner

- [ ] Arrays & Strings
- [ ] Hashing
- [ ] Two Pointers
- [ ] Sliding Window
- [ ] Prefix Sum

### 🥈 Intermediate

- [ ] Stack
- [ ] Queue
- [ ] Linked List
- [ ] Binary Search
- [ ] Recursion
- [ ] Sorting
- [ ] Trees
- [ ] Heap
- [ ] Greedy

### 🥇 Advanced

- [ ] Backtracking
- [ ] Graphs
- [ ] Dynamic Programming
- [ ] Advanced Graph Algorithms
- [ ] Advanced DP

---

# 💻 Language

All solutions in this repository are implemented using:

**JavaScript (ES6+)**

---

# 📌 Objective

> **Learn the pattern → Understand the logic → Solve the problem → Analyze complexity → Revise → Repeat.**

This repository is a record of my journey toward becoming a stronger problem solver and preparing for **DSA-based technical interviews**.

---

## ⭐ Progress

**DSA Journey Started:** August 2026

**Current Pattern:** Two Pointers

**Problems Solved:** `0`

**Patterns Completed:** `0 / 18`

---

### 🚀 Keep Learning. Keep Solving. Keep Improving.
