import React, { useState } from 'react';
import './App.css';


class Banner extends React.Component{
  render() {
    const title = "Sextant User Info";


    return( 
      <div className="App-banner">
        {title}
      </div>
    )
  }
}

function Exhibit(props) {
  const [ipshown, setipshown] = useState(true)


  

  return (
    <div className="exhibit" >
      <button className="exhibit-button"
      onClick={() => setipshown(!ipshown)}
      >
      {props.title}
      </button>

    {
      <div>
        {props.component}
      </div>
    }
  </div>
  )
}

function Ipcollector(prop) {

   var url;
   let ipaddress;
  

  if (prop=="ipv4"){
    url="https://api.ipify.org?format=json"
  } else {
    url="https://api64.ipify.org?format=json"
  }

  
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
  
  return("test")  
}


function App() {
  return (
    <div className="App">
      <div className="Banner">
        <Banner />
      </div>

      <div className="App-box">
        <div className="App-exhibit">
          <Exhibit title={"Ipv4 address"} component={Ipcollector("ipv4")}/>
        </div>

        <div className="App-exhibit">
          <Exhibit title={"Ipv6 address"} component={Ipcollector("ipv6")}/>
        </div>
      </div>
    </div>
  );
}

export default App;
