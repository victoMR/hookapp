// Counter component
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export function Counter() {
  const [count, setCout] = useState(0);
  function increment() {
    setCout(count + 1);
    // console.log("value "+count);
  }

  function decrement() {
    setCout(count - 1);
    // console.log("value "+count);
  }

  function reset() {
    setCout(0);
  }

  return (
    <>
      <div
        style={{
          margin: "10%",
          backgroundColor: "grey",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <h2>Contador </h2>
        <div>El contador esta en: {count}</div>
        <div>
          <Button
            style={{ margin: "20px", borderRadius: "20px" }}
            type="button"
            onClick={increment}
          >
            +
          </Button>
          <Button
            style={{ margin: "20px", borderRadius: "20px" }}
            type="button"
            onClick={decrement}
          >
            -
          </Button>
          <Button
            style={{ margin: "20px", borderRadius: "20px" }}
            type="button"
            onClick={reset}
          >
            Reiniciar
          </Button>
        </div>
      </div>
    </>
  );
}
