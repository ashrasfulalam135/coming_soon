import React, { Component } from "react";

class EmailForm extends Component {
  state = {};
  render() {
    const { logo } = this.props;
    return (
      <div className="size3 flex-col-sb flex-w p-l-75 p-r-75 p-t-45 p-b-45 respon1">
        <div className="wrap-pic1">
          <img src={logo} alt="LOGO" />
        </div>

        <div className="p-t-50 p-b-60">
          <p className="m1-txt1 p-b-36">
            Our website is <span className="m1-txt2">Coming Soon</span>, follow
            us for update now!
          </p>

          <form className="contact100-form validate-form">
            <div
              className="wrap-input100 m-b-10 validate-input"
              data-validate="Name is required"
            >
              <input
                className="s2-txt1 placeholder0 input100"
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <span className="focus-input100" />
            </div>

            <div
              className="wrap-input100 m-b-20 validate-input"
              data-validate="Email is required: ex@abc.xyz"
            >
              <input
                className="s2-txt1 placeholder0 input100"
                type="text"
                name="email"
                placeholder="Email Address"
              />
              <span className="focus-input100" />
            </div>

            <div className="w-full">
              <button className="flex-c-m s2-txt2 size4 bg1 bor1 hov1 trans-04">
                Subscribe
              </button>
            </div>
          </form>

          <p className="s2-txt3 p-t-18">
            And don’t worry, we hate spam too! You can unsubcribe at anytime.
          </p>
        </div>

        <div className="flex-w">
          <a href="#" className="flex-c-m size5 bg3 how1 trans-04 m-r-5">
            <i className="fa fa-facebook" />
          </a>

          <a href="#" className="flex-c-m size5 bg4 how1 trans-04 m-r-5">
            <i className="fa fa-twitter" />
          </a>

          <a href="#" className="flex-c-m size5 bg5 how1 trans-04 m-r-5">
            <i className="fa fa-youtube-play" />
          </a>
        </div>
      </div>
    );
  }
}

export default EmailForm;
