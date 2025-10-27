import "../styles/App.css";
import DebtorsList from "./DebtorsList.jsx";
import Header from "./Header.jsx";

const App = () => {
  return (
    <div className="app">
      <Header />
      <DebtorsList />
    </div>
  );
};

export default App;
