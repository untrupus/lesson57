import React from "react";

const Bill = props => {
    let totalPrice = props.amount + ((props.amount / 100) * props.percent) + props.delivery;
    let total = Math.ceil(totalPrice / props.people);
    let enableBtn = true;
    if (!isNaN(props.amount) && !isNaN(props.people) && props.amount !== '' && props.people !== '') {
        enableBtn = false;
    }

    return (
        <div className={props.class}>
            <br/>
            <label>Человек: <input type="text" name="people" onChange={props.change}/> чел.</label><br/><br/>
            <label>Сумма заказа: <input type="text" name="amount" onChange={props.change}/> сом</label><br/><br/>
            <label>Процент чаевых: <input type="text" name="percent" onChange={props.change}/> %</label><br/><br/>
            <label>Доставка: <input type="text" name="delivery" onChange={props.change}/> сом</label><br/><br/>
            <button type="button" onClick={props.click} disabled={enableBtn}>Рассчитать</button>
            {
                props.result ?
                    <div>
                        <p>Общая сумма: {totalPrice}</p>
                        <p>Количество человек: {props.people}</p>
                        <p>Каждый платит по: {total}</p>
                    </div>: null
            }

        </div>
    );
}

export default Bill;