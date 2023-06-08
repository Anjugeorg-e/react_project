import logo from './logo.svg';
import './App.css';
import AzureHeader from './components/Header/Header';
import Innovation from './components/Innovation/innovation';
import CloudSolution from './components/CloudSolution/CloudSolution';
import Feature from './components/Feature/Feature';
import Customer from './components/Customers/Customer';
import Migration from './components/Migration/Migration';
import Discover from './components/Discover/Discover';
import Azurebot from './components/Azurebot/Azurebot';

function App() {
  return (
    <div className="App">
      <AzureHeader />
      <Innovation />
      <CloudSolution />
      <Feature />
      <Customer />
      <Migration />
      <Discover />
      <Azurebot />
    </div>
  );
}

export default App;
