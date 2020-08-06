import React, {useState} from 'react';
import './App.css';
import Bill from "../components/Bill/Bill";
import SeparateBill from "../components/SeparateBill/SeparateBill";

function App() {

    const [bill, setBill] = useState({
        people: '',
        amount: '',
        percent: '',
        delivery: '',
    });

    const [value, setValue] = useState('equal');

    const [result, setResult] = useState(false);

    const [resultSeparate, setResultSeparate] = useState(false);

    const [separate, setSeparate] = useState([]);

    const [separateDetails, setSeparateDetails] = useState({
        separatePercent: '',
        separateDelivery: '',
    });

    const newBill = event => {
        const attr = event.target.name;
        const billCopy = {...bill};
        billCopy[attr] = parseInt(event.target.value);
        setBill(billCopy);
    }

    const addSeparate = () => {
        const newSeparate = [...separate];
        newSeparate.push({name: '', money: 0, id: (newSeparate.length + 1)});
        setSeparate(newSeparate);
    }

    const newSeparate = (event, id) => {
        // const index = separate.findIndex(p => p.id === id)
        // const separateCopy = [...separate];
        // const newField = {...separateCopy[index]};
        // newField.name = event.target.value;
        // setSeparate(separateCopy);
        // console.log(newField);
    }

    const itemRemove = id => {
        const index = separate.findIndex(p => p.id === id);
        const newSeparate = [...separate];
        newSeparate.splice(index, 1);
        setSeparate(newSeparate);
    }

    const newSeparateDetails = event => {
        const attr = event.target.name;
        const newDetails = {...separateDetails};
        newDetails[attr] = event.target.value;
        setSeparateDetails(newDetails);
    }

    const showResult = () => {
        setResult(true);
    }
    const showResultSeparate = () => {
        setResultSeparate(true);
    }

    const view = event => {
        if (event.target.checked) {
            setValue(event.target.value);
        }
    }

    return (
        <div className="App">
            <h4>Сумма заказа считается:</h4>
            <div>
                <label><input type="radio" name="radio" value="equal" checked={value === "equal"} onChange={view}/>Поровну
                    между всеми участниками</label>
            </div>
            <div>
                <label><input type="radio" name="radio" value="separate" checked={value === "separate"}
                              onChange={view}/>Отдельно для каждого</label>
            </div>

            {
                value === 'equal' ?
                    <Bill
                        people={bill.people}
                        amount={bill.amount}
                        percent={bill.percent}
                        delivery={bill.delivery}
                        click={showResult}
                        change={newBill}
                        result={result}
                    /> : null
            }
            {
                value === 'separate' ?
                    <SeparateBill
                        visitors={separate}
                        click={showResultSeparate}
                        result={resultSeparate}
                        field={addSeparate}
                        separate={separate}
                        move={itemRemove}
                        details={newSeparateDetails}
                        percent={separateDetails.separatePercent}
                        delivery={separateDetails.separateDelivery}
                        names={newSeparate}
                    /> : null
            }
        </div>
    );
}

export default App;
