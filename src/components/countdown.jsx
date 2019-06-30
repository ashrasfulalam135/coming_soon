import React, { Component } from "react";
import Tilt from "react-tilt";

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({ days, hours, minutes, seconds });
  }

  numberPadding(number) {
    return number < 10 ? "0" + number : number;
  }

  render() {
    const { backgroundPicture } = this.props;
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div
        className="flex-c-m bg-img1 size2 where1 overlay1 where2 respon2"
        style={{
          backgroundImage: "url(" + backgroundPicture + ")"
        }}
      >
        <Tilt className="wsize2 flex-w flex-c-m cd100 Tilt">
          <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
            <span className="l2-txt1 p-b-9 days">
              {this.numberPadding(days)}
            </span>
            <span className="s2-txt4">Days</span>
          </div>

          <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
            <span className="l2-txt1 p-b-9 hours">
              {this.numberPadding(hours)}
            </span>
            <span className="s2-txt4">Hours</span>
          </div>

          <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
            <span className="l2-txt1 p-b-9 minutes">
              {this.numberPadding(minutes)}
            </span>
            <span className="s2-txt4">Minutes</span>
          </div>

          <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
            <span className="l2-txt1 p-b-9 seconds">
              {this.numberPadding(seconds)}
            </span>
            <span className="s2-txt4">Seconds</span>
          </div>
        </Tilt>
      </div>
    );
  }
}

export default CountDown;
