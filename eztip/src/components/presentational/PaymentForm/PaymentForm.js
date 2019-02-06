import React, { Component } from "react";
import PropTypes from "prop-types";
import { payTip } from "../../../store/actions";
import { connect } from "react-redux";

class PaymentForm extends Component {
  state = {
    payment: "",
    ccNumber: "",
    expiration: "",
    verification: "",
    match: null,
    history: null,
    id: null
  };
  componentDidMount() {
    this.setState({
      match: this.props.match,
      history: this.props.history,
      id: this.props.id
    });
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  cancel = e => {
    e.preventDefault();
    this.state.history.push(`/employee/${this.state.id}`);
  };
  submitTip = e => {
    e.preventDefault();
    this.props.payTip({
      worker_id: this.state.id,
      tip_amount: this.state.payment
      // ccNumber: this.state.ccNumber,
      // expiration: this.state.expiration,
      // verification: this.state.verification
    });
  };
  render() {
    return (
      <form onSubmit={this.submitTip} className="payment-form">
        <input
          required
          autoComplete="off"
          type="number"
          name="payment"
          placeholder="Tip amount"
          value={this.state.payment}
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="number"
          name="ccNumber"
          placeholder="Credit card number"
          value={this.state.ccNumber}
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="number"
          name="expiration"
          placeholder="Expiration date"
          value={this.state.expiration}
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="number"
          name="verification"
          placeholder="Verification code"
          value={this.state.verification}
          onChange={this.handleChange}
        />
        <button type="submit">Send Tip</button>
        <button type="button" onClick={this.cancel}>
          Cancel
        </button>
      </form>
    );
  }
}

PaymentForm.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapActionsToProps = {
  payTip
};

export default connect(
  null,
  mapActionsToProps
)(PaymentForm);
