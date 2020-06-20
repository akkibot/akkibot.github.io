import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import Result from "./Result";

export default class AKKI extends Component {
  constructor() {
    super();
    this.state = {
      amount : 40000,
      days: 6,
      mateWater: "true",
      minLength: 12,
      maxLength: 17,
      minWidth: 12,
      maxWidth: 17,
      minHeight: 0.10,
      maxHeight: 0.18,
      showResult: false
    };
  }
  componentDidMount = () => {
    M.AutoInit();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showResult: true
    })
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  handleRadio = (e) => {
    this.setState({
      mateWater: e.target.value
    })
  }

  render() {
    return (
      <div className="akki">
        <div className="row section container">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="input-field col s12">
              <input
                placeholder="Amount"
                id="amount"
                name="amount"
                type="number"
                value={this.state.amount}
                onChange={this.handleChange}
                className="validate"
              />
              <label className="active" htmlFor="amount">Amount</label>
            </div>

            <div className="col left s9">
              <h6>Weather to Calculate Mate/Water</h6>
            </div>
            <div className="input-field col s3">
              <span>
                <label>
                  <input name="group1" className="with-gap" type="radio" value={true} onChange={this.handleRadio} checked={this.state.mateWater === "true"}/>
                  <span>Yes</span>
                </label>
              </span> 
              <span>
                <label>
                  <input name="group1" className="with-gap" type="radio" value={false} onChange={this.handleRadio} checked={this.state.mateWater === "false"}/>
                  <span>No</span>
                </label>
              </span>
            </div>

            {this.state.mateWater==="true" ? (
              <div className="input-field col s12">
                <input
                  placeholder="No of Days"
                  id="days"
                  name="days"
                  type="number"
                  value={this.state.days}
                  onChange={this.handleChange}
                  className="validate"
                  min={1}
                />
                <label className="active" htmlFor="days">No of Days</label>
              </div>
            ):null}

            <div className="minmaxContainer">
              <div className="row">
                <div className="col left s12">
                  <h5>Enter Limit</h5>
                </div>
                <div className="col s4">Length</div>
                <div className="col s4">Width</div>
                <div className="col s4">Height</div>
              </div>

              <div className="row">
                <div className="col s4">
                  <input
                    placeholder="Min Length"
                    id="minLength"
                    name="minLength"
                    type="number"
                    value={this.state.minLength}
                    onChange={this.handleChange}
                    className="validate"
                  />
                  <label className="active" htmlFor="days">Min Length</label>
                </div>
                <div className="col s4">
                  <input
                    placeholder="Min Width"
                    id="minWidth"
                    name="minWidth"
                    type="number"
                    value={this.state.minWidth}
                    onChange={this.handleChange}
                    className="validate"
                  />
                  <label className="active" htmlFor="days">Min Width</label>
                </div>
                <div className="col s4">
                  <input
                    placeholder="Min Height"
                    id="minHeight"
                    name="minHeight"
                    type="number"
                    value={this.state.minHeight}
                    onChange={this.handleChange}
                    className="validate"
                  />
                  <label className="active" htmlFor="days">Min Height</label>
                </div>
              </div>
            
              <div className="row">
                <div className="col s4">
                  <input
                    placeholder="Max Length"
                    id="maxLength"
                    name="maxLength"
                    type="number"
                    value={this.state.maxLength}
                    onChange={this.handleChange}
                    className="validate"
                  />
                  <label className="active" htmlFor="days">Max Length</label>
                </div>
                <div className="col s4">
                  <input
                    placeholder="Max Width"
                    id="maxWidth"
                    name="maxWidth"
                    type="number"
                    value={this.state.maxWidth}
                    onChange={this.handleChange}
                    className="validate"
                  />
                  <label className="active" htmlFor="days">Max Width</label>
                </div>
                <div className="col s4">
                  <input
                    placeholder="Max Height"
                    id="maxHeight"
                    name="maxHeight"
                    type="number"
                    value={this.state.maxHeight}
                    onChange={this.handleChange}
                    className="validate"
                  />
                  <label className="active" htmlFor="days">Max Height</label>
                </div>
              </div>
            </div>

            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Calculate
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
        {this.state.showResult && <div className="row section">
          <Result rawData={this.state}/>
        </div>}
      </div>
    );
  }
}
