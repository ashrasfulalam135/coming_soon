import React, { Component } from "react";
import logo from "./logo.svg";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/animate/animate.css";
import "./vendor/select2/select2.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./css/main.css";
import "./css/util.css";
import BackgroundPicture from "./images/bg01.jpg";
import Logo from "./images/icons/logo.png";

import CountDown from "./components/countdown";
import EmailForm from "./components/emailForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "2019-08-14"
    };
  }
  render() {
    return (
      <div className="size1 bg0 where1-parent">
        <CountDown
          backgroundPicture={BackgroundPicture}
          deadline={this.state.deadline}
        />
        <EmailForm logo={Logo} />
      </div>
    );
  }
}

export default App;
