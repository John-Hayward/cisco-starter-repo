import React from 'react';
import './App.css';


class Banner extends React.Component{
  render() {
    const title = "Sextant User Info";

    return( 
      <div className="Title">
        {title}
      </div>
    )
  }
}

function Exhibit(props) {
  return (
    <div className="exhibit">
      <h1 className="Exhibit-Title">
        {props.title}
      </h1>
      <div className="components">
        {props.component}
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <div className="Banner">
        <Banner />
      </div>

      <div className="exhibit 1">
        <Exhibit title={"Exhibit title"} component={"Exhibit component"}/>
      </div>

      <div className="exhibit 2">
        <Exhibit title={"Exhibit 2 title"} component={"Exhibit 2 component"}/>
      </div>
    </div>
  );
}

export default App;
