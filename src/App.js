import './App.css';
import Header from './App/Header';
import Form from './App/Form';
import Container from './App/Container';
import { useState } from 'react';
import { Currency } from '../src/App/Form/Currency';
import Clock from './Clock';



function App() {

    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = Currency
            .find(({ short }) => short === currency)
            .rate;

        setResult({
            sourceAmound: +amount,
            targetAmount: amount / rate,
            currency,
        });
    }

    return (
        <Container>
            <Header 
            title={"Kalkulator Walut"} />
            <Form
                result={result}
                calculateResult={calculateResult}
            />
        </Container>
    );
}

export default App;
