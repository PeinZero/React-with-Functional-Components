# Simple Login App

This project is built using React. It has a simple login screen which upon entering valid email and password which is atleast 7 chars long, log in the user. The user can logout using logout button.

### Problem (Solved using useEffet() Hook)
After log in, upon refreshing, the user is automatically logged out. The data is not persistent since after refreshing react scripts starts again.

### How to manage complex state (Solved using useReducer() Hook)
You have states that belongs together, or if you have state updates that depend on other states and so on.

### Problem (Solved using Context Api)
The Prop chains is formed / Prop drilling is happening.

## Concepts Covered
- Effects / Side-Effects

- useEffect() Hook
--- useEffect() Dependencies
--- useEffect() Clean up function & Debouncing

- useReducer() Hook

- React Context
--- using Consumer & Provider
--- using useContext() hook & Provider
