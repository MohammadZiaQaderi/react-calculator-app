import * as calculate from "./calculator";

function App() {
    return (
      <ul>
        <li>{calculate.add(2,6)}</li>
        <li>{calculate.multiply(3,3)}</li>
        <li>{calculate.subtract(200,3)}</li>
        <li>{calculate.divide(49,4)}</li>
      </ul>
    );
}
export default App;