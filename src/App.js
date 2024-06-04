import classes from './App.module.css';
import InputMoney from "./component/Money/InputMoney";
import Filter from "./component/Money/Filter";
import ListItems from "./component/Money/ListItems";

function App() {
  return (
    <div>
        <InputMoney />
        <Filter />
        <ListItems />
      <img className={classes.img} src="MoneyCalender.png" alt="MoneyCalender" />
    </div>
  );
}

export default App;
