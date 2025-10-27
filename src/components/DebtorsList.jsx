import { useCallback, useState } from "react";
import { uniqueId } from "lodash";
import List from "./List.jsx";
import FormAddDebtors from "./FormAddDebtors.jsx";

const DebtorsList = () => {
  const [debtors, setDebtors] = useState([]);

  const toggleDebtor = useCallback((debtorId) => {
    setDebtors((prevDebtors) => {
      return prevDebtors.map((debtor) =>
        debtor.id === debtorId ? { ...debtor, check: !debtor.check } : debtor
      );
    });
  }, []);

  const handleAddDebtor = useCallback((name, debt) => {
    setDebtors((prevDebtors) => [
      { name, debt, id: uniqueId(), check: false },
      ...prevDebtors,
    ]);
  }, []);

  return (
    <div>
      <FormAddDebtors onAddDebtor={handleAddDebtor} />
      <List debtors={debtors} onToggle={toggleDebtor} />
    </div>
  );
};

export default DebtorsList;
