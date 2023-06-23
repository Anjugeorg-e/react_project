import logo from "./logo.svg";
import "./App.css";
import AzureHeader from "./components/Header/Header";
import Innovation from "./components/Innovation/innovation";
import CloudSolution from "./components/CloudSolution/CloudSolution";
import Feature from "./components/Feature/Feature";
import Customer from "./components/Customers/Customer";
import Migration from "./components/Migration/Migration";
import Discover from "./components/Discover/Discover";
import Azurebot from "./components/Azurebot/Azurebot";
import AzureService from "./components/AzureService/AzureService";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [components, setComponents] = useState([]);

  const [innovation, setInnovation] = useState([]);
  const [onPremise, setOnPremise] = useState([]);
  const [features, setFeatures] = useState([]);
  const [show, setShow] = useState("featured");
  const [feature, setFeature] = useState([]);
  const [ai, setAi] = useState([]);
  const [compute, setCompute] = useState([]);
  const [container, setContainer] = useState([]);
  const [hybrid, setHybrid] = useState([]);
  const [iot, setIot] = useState([]);

  const [customer, setCustomer] = useState([]);
  const [customerShow, setCustomerShow] = useState("Fujitsu");
  const [fujitsu, setFujitsu] = useState([]);
  const [nba, setNba] = useState([]);
  const [hrblock, sethrBlock] = useState([]);
  const [nhs, setNhs] = useState([]);
  const [forza, setForza] = useState([]);

  const [discover, setDiscover] = useState([]);
  const [azureBot, setAzureBot] = useState([]);

  const [services, setServices] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Anjugeorg-e/react_project/main/azure/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      // .then((data) => {
      //   setComponents(data);
      // });

      .then((item) => {
        setInnovation(item.invent);
        setOnPremise(item.onprimise);
        setFeatures(item.azureProducts);
        setFeature(item.Featured);
        setAi(item.AIMachineLearning);
        setCompute(item.Compute);
        setContainer(item.Containers);
        setHybrid(item.HybridMulticloud);
        setIot(item.InternetOfThings);

        setCustomer(item.customer);
        setFujitsu(item.Fujitsu);
        setNba(item.NBA);
        sethrBlock(item.HRblock);
        setNhs(item.NHS);
        setForza(item.Forza);

        setDiscover(item.discover);
        setAzureBot(item.voiceAssistant);

        setServices(item.azureCards)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (item) => {
    setShow(item);
  };
  const handleClickOnCustomer = (item) => {
    setCustomerShow(item);
  };

  return (
    <div className="App">
      <AzureHeader />
      <Innovation innovation={innovation} />

      <CloudSolution onPremise={onPremise} />
      <Feature
        features={features}
        handleClick={handleClick}
        feature={feature}
        show={show}
        ai={ai}
        compute={compute}
        container={container}
        hybrid={hybrid}
        iot={iot}
      />

      <Customer
        customer={customer}
        handleClickOnCustomer={handleClickOnCustomer}
        customerShow={customerShow}
        fujitsu={fujitsu}
        nba={nba}
        hrblock={hrblock}
        nhs={nhs}
        forza={forza}
      />
      <Migration />

      <Discover discover={discover} />
      <Azurebot azureBot={azureBot}/>
      <AzureService services={services} />
      <Footer />
    </div>
  );
}

export default App;
