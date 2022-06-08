import React from "react";

function AddMoneyForm({ onAddMoney }) {

  return (
    <form onSubmit={onAddMoney}>
      <label>Add Money To Your Wallet</label>
      <br/>
      <input placeholder="Enter Amount"/>
      <button type="submit">Add Money</button>
    </form>
  )
}

export default AddMoneyForm;
