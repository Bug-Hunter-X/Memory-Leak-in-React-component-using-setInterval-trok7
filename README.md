# React setInterval Memory Leak

This repository demonstrates a common error in React components that leads to memory leaks: using `setInterval` within the `useEffect` hook without proper cleanup.

## Problem

The `bug.js` file shows a component that uses `setInterval` to update a counter every second. However, it's missing the crucial `return` statement inside `useEffect` which is needed to stop the interval when the component unmounts. This leads to a memory leak because the interval continues to run even after the component is no longer rendered.

## Solution

The `bugSolution.js` file demonstrates the correct approach: using a cleanup function in `useEffect` to clear the interval when the component is unmounted. This prevents the memory leak.