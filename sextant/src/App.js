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
  const [ipshown, setipshown] = useState(false)


  

  return (
    <div className="exhibit" >
      <button className="exhibit-button"
      onMouseEnter={() => setipshown(true)}
      onMouseLeave={() => setipshown(false)}>
      {props.title}
      </button>

    {ipshown && (
      <div>
        {props.component}
      </div>
    )}
  </div>
  )
}

function Ipcollector(prop) {

  var ipaddress;


  if (prop=="ipv4"){
    ipaddress="ipv4"
  } else {
    ipaddress="ipv6"
  }

  return(ipaddress)
  
}


function App() {
  return (
    <div className="App">
      <div className="Banner">
        <Banner />
      </div>

      <div class="App-box">
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
