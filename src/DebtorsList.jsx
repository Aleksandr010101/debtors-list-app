import React, { useState } from "react";
import List from "./List.jsx";
import FormAddDebtors from "./FormAddDebtors.jsx";

const DebtorsList = () => {
  const [debtors, setDebtors] = useState([
    { name: "Alex", debt: 100, id: 20, chek: false },
    { name: "Tanya", debt: 200, id: 21, chek: false },
  ]);

  return (
    <>
      <FormAddDebtors debtors={debtors} setDebtors={setDebtors} />
      <List debtors={debtors} setDebtors={setDebtors} />
    </>
  );
};

export default DebtorsList;
