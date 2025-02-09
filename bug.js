```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Updates every second
    // Missing return statement to cleanup interval
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```