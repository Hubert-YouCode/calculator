import "./style.css";
import { useState } from "react";
import { Result } from "../Result";
import { Currency } from "./Currency";

const Form = ({ calculateResult, result }) => {

    const [currency, setCurrency] = useState(Currency[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };


    return (
        <form className="form" onSubmit={onSubmit}>
            <p>
                <label>
                    Kwota w zł*:{" "}
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        className="form__item"
                        type="number"
                        required
                        placeholder="Wpisz kwotę w zł"
                        step="0.01"
                    />
                </label>
            </p>
            <p>
                Waluta*:{" "}
                <select
                    className="form__item"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                >
                    {Currency.map((currency => (
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
                        </option>
                    )))}

                </select>
            </p>
            <Result result={result} />
            <button class="button">Przelicz!</button>
        </form>
    );
};


export default Form;