import React from "react";
import Fields from "../Fields/Fields";
import './SeparateBill.css'

const SeparateBill = props => {
    let visitors = props.visitors.map((visitor, index) => {
        let key = visitor.name + index
        return (
            <p key={key}>{visitor.name}: {visitor.money + (visitor.money * props.percent / 100) +(props.delivery / props.visitors.length)}  сом.</p>
        )
    });
    let newFields = props.separate.map((item) => {
        return (
            <Fields
                key={props.separate.indexOf(item)}
                move={() => props.move(item.id)}
                name={() => props.names(item.name)}
            />
        )
    })
    return (
        <div className="SeparateBill">

            {newFields}

            <button type="button" onClick={props.field}>Add</button>
            <br/><br/>
            <label>Процент чаевых: <input type="text" name="separatePercent" onChange={props.details}/> %</label><br/><br/>
            <label>Доставка: <input type="text" name="separateDelivery" onChange={props.details}/> сом</label><br/><br/>
            <button type="button" onClick={props.click}>Рассчитать</button>
            {
                props.result ?
                    <div>
                        <p>Общая сумма: </p>
                        {visitors}
                    </div> : null
            }

        </div>
    );
}

export default SeparateBill;