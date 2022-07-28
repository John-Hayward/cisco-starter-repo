import React, { Component, useState } from 'react';
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

class Exhibit extends Component {

  render() {
    return (
      <div className='App-exhibit'>
        <button className='exhibit-button'>
          {this.props.title}
        </button>
        <div className='exhibit-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

class Ipcollector extends Component {
  constructor(props) {
    super(props);
    this.state ={
      url: props.url,
      ipAddress: null,
    }
  }

  componentDidMount() {
    fetch(this.state.url)
      .then(response => response.json())
      .then(data => this.setState({ ipAddress: data.ip}));
  }

  render() {
    return (
      <span className="ipdisplay">
        {this.state.ipAddress}
      </span>
    )
  }

}

class LatencyFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latency: null,
    };
  }

  componentDidMount() {
    var W3CWebSocket = require('websocket').w3cwebsocket;

    var client = new W3CWebSocket('ws://localhost:55455')

    client.onmessage = function(e) {
      var currenttime = Date.now()
      var latent=currenttime-e.data;
      this.setState({latency: latent})
    }.bind(this)
  }

  render() {
    return (
      <span className="latencydisplay">
        {this.state.latency}
      </span>
    )
  }

}

function App() {
  return (
    <div className="App">
      <div className="Banner">
        <Banner />
      </div>

      <div className="App-box">
        <div className="App-box">
          <Exhibit title={"Ipv4 address"}>
            <Ipcollector url="https://api.ipify.org?format=json"/>
          </Exhibit>
        </div>

        <div className="App-box">
          <Exhibit title={"Ipv6 address"}>
            <Ipcollector url="https://api64.ipify.org?format=json"/>
          </Exhibit>
        </div>

        <div className="App-box">
          <Exhibit title={"Latency/ms"}>
            <LatencyFinder/>
          </Exhibit>
        </div>
      </div>
    </div>
  );
}

export default App;
