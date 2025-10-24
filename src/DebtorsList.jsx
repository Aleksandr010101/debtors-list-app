import { useState } from "react";
import List from "./List.jsx";
import FormAddDebtors from "./FormAddDebtors.jsx";

const DebtorsList = () => {
  const [debtors, setDebtors] = useState([]);

  return (
    <div>
      <FormAddDebtors debtors={debtors} setDebtors={setDebtors} />
      <List debtors={debtors} setDebtors={setDebtors} />
    </div>
  );
};

export default DebtorsList;
