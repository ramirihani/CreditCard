import React, { Component } from "react";

export default class CreditCard extends Component {
  state = {
    name: "",
    date: "",
    CardNumber: ""
  };
  changenumber = e => {
    let regexCardNum = /[^0-9 ]$/;
    if (!regexCardNum.test(e.target.value)) {
      this.setState({
        CardNumber: e.target.value
      });
    }
  };

  changename = e => {
    this.setState({
      name: e.target.value
    });
  };
  changedate = e => {
    let regexCartDate = /[^0-9]$/;
    let regexMonth = /[^0-1]$/;
    if (!regexCartDate.test(e.target.value)) {
      if (
        !regexMonth.test(e.target.value.substr(0, 1)) &&
        e.target.value.substr(0, 2) <= 12
      )
        this.setState({
          date: e.target.value
        });
    }
  };
  addSpace = number => {
    return number.toString().replace(/\d{4}(?=.)/g, "$& ");
  };
  toUpper = name => {
    return name.toUpperCase();
  };
  addSlice = date => {
    if (date.length >= 2) {
      return (date = date.substr(0, 2) + "/" + date.substr(2, 3));
    }
  };
  render() {
    return (
      <div className="bloc">
        <form className="input">
          <input
            type="text"
            placeholder="credit card"
            onChange={this.changenumber}
            maxLength={16}
            value={this.state.CardNumber}
          ></input>
          <input
            type="text"
            placeholder="name"
            maxLength={20}
            onChange={this.changename}
            value={this.state.name}
          ></input>
          <input
            type="text"
            placeholder="date"
            onChange={this.changedate}
            maxLength={4}
            value={this.state.date}
          ></input>
        </form>
        <div className="card">
          <p className="number">
            {this.addSpace(this.state.CardNumber).padEnd(19, ".")}
          </p>
          <div>
            <p className="name">
              {this.toUpper(this.state.name).padEnd(20, ".")}
            </p>
            <p className="date">
              {this.addSlice(this.state.date.padEnd(4, "."))}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
