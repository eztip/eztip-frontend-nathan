import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { resetPaymentForm } from "../../../store/actions";

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(247, 247, 247, 0.7);
  z-index: 15;
  position: fixed;

  div {
    background: white;
    border: 1px solid #b5b5b5;
    margin: 15vh auto 0;
    padding: 35px 0;
    max-width: 500px;
    width: 100%;
    -webkit-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
    box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
  }
`;

const PaymentModal = props => {
  const handleModalBtn = e => {
    e.preventDefault();
    if (props.tipPaid) {
      props.resetPaymentForm();
    }
    props.resetPaymentForm();
  };
  return (
    <Overlay>
      <div>
        <p>
          {props.tipPaid
            ? "Tip paid successfully."
            : "Error. Please try again."}
        </p>
        <button type="button" onClick={handleModalBtn}>
          OKAY
        </button>
      </div>
    </Overlay>
  );
};

PaymentModal.propTypes = {
  payingTip: PropTypes.bool.isRequired,
  tipPaid: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  payingTip: state.paymentReducer.payingTip,
  tipPaid: state.paymentReducer.tipPaid
});

const mapActionsToProps = {
  resetPaymentForm
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PaymentModal);
