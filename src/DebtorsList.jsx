import React, { useState } from "react";
import List from "./List.jsx";
import FormAddDebtors from "./FormAddDebtors.jsx";

const DebtorsList = () => {
  const [debtors, setDebtors] = useState([
    { name: "Alex", debt: 100 },
    { name: "Tanya", debt: 200 },
  ]);

  return (
    <>
      <FormAddDebtors debtors={debtors} setDebtors={setDebtors} />
      <List debtors={debtors} />
    </>
  );
};

export default DebtorsList;
