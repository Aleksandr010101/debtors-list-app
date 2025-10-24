import React, { useEffect, useState, useRef } from "react";

const FormAddDebtors = (props) => {
  const [name, setName] = useState("");
  const [debt, setDebt] = useState("");
  const { debtors, setDebtors } = props;

  const debtorsSubmit = (e, debtors, name, debt) => {
    e.preventDefault();
    const resultD = [{ name, debt }, ...debtors];
    setDebtors(resultD);
    setName("");
    setDebt("");
    return;
  };

  return (
    <form onSubmit={(e) => debtorsSubmit(e, debtors, name, debt)}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="debt"
        value={debt}
        onChange={(e) => setDebt(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FormAddDebtors;
