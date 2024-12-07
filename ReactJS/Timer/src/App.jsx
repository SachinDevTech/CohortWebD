import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return; // Only run when 'isRunning' is true

    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount + 1); // Use functional update
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on unmount or when 'isRunning' changes
  }, [isRunning]);

  function startTimer() {
    setIsRunning(true);
  }

  return (
    <>
      <h3>{count}</h3>
      <button onClick={startTimer}>Start Timer</button>
    </>
  );
}

export default App;
