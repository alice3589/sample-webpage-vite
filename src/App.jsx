import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <p>こんにちは!</p>
      </div>
      <button>ボタン</button>
    </div>
  );
}

export default App
