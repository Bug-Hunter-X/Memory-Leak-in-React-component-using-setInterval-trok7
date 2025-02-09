```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const intervalId = React.useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <div>Count: {count}</div>
  );
}

export default MyComponent;
```