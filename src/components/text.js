// Text component
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export function Text() {
  var [text, setText] = useState("Encendido");
  const [count, setCout] = useState(0);

  function turnOff() {
    if (text === "Encendido") {
      setText("Apagado");
      setCout(0);
    } else {
      setText("Encendido");
      setCout(100);
    }
  }

  function increment() {
    setCout(count + 10);
    if (count === 100) {
      setCout(0);
      setText("Al minimo");
    }
  }

  function decrement() {
    setCout(count - 10);
    if (count === 0) {
      setText("Al minimo");
      setCout(0);
    }
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
        <div>
          <h2>Boton </h2>
          <div>{text}</div>
          <Button
            style={{ margin: "20px", borderRadius: "10px" }}
            className="switch"
            onClick={turnOff}
          >
            Apagar
          </Button>
        </div>
        <div>
          <h2>Timear el led </h2>
          <div>El led esta en: {count} %</div>
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
              Reset
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
