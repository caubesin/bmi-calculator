import './App.css';
import Input from './component/input-value';
import Notice from './component/notice';
import Chart from './component/chart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>BMI Tracker</h2>
      </header>
      <div className="container">
        <Input></Input>
        <Chart></Chart>
        <Notice></Notice>
      </div>
    </div>
  );
}

export default App;
