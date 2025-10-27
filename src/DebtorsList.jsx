import { useCallback, useState } from "react";
import List from "./List.jsx";
import FormAddDebtors from "./FormAddDebtors.jsx";
import { uniqueId } from "lodash";

const DebtorsList = () => {
  const [debtors, setDebtors] = useState([]);

  const toggleDebtor = useCallback((debtorId) => {
    setDebtors((prevDebtors) => {
      return prevDebtors.map((debtor) =>
        debtor.id === debtorId ? { ...debtor, chek: !debtor.chek } : debtor
      );
    });
  }, []);

  const handleSetDebtor = useCallback((name, debt) => {
    setDebtors((prevDebtors) => [
      { name, debt, id: uniqueId(), chek: false },
      ...prevDebtors,
    ]);
  }, []);

  return (
    <div>
      <FormAddDebtors handleSetDebtor={handleSetDebtor} />
      <List debtors={debtors} toggle={toggleDebtor} />
    </div>
  );
};

export default DebtorsList;
