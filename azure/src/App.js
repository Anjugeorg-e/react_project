import logo from './logo.svg';
import './App.css';
import AzureHeader from './components/Header/Header';
import Innovation from './components/Innovation/innovation';
import CloudSolution from './components/CloudSolution/CloudSolution';
import Feature from './components/Feature/Feature';

function App() {
  return (
    <div className="App">
      <AzureHeader />
      <Innovation />
      <CloudSolution />
      <Feature />
    </div>
  );
}

export default App;
