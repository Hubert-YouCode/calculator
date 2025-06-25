import { useCurrencyDate } from "./currencyDate";
import { formattedDate } from "./styled";
import "./style.css"

const Clock = () => {
    const date = useCurrencyDate();

   return (
        <p className="clock-date">
        Dzisiaj jest
        {" "}
        {formattedDate.format(date)}
        </p>
    );
};


export default Clock;