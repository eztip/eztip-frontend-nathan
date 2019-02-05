import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PaymentView extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("In PaymentView", id);
  }
  render() {
    return (
      <div>
        <div />
      </div>
    );
  }
}
