import React from 'react';
import classes from './InputMoney.module.css';

const InputMoney = () => {
    return (
        <div className={classes.mainBox}>
            <label htmlFor="productName">이름</label>
            <input id="productName" name="productName"/>
            <label htmlFor="productPrice">가격</label>
            <input id="productPrice" name="productPrice"/>
            <label htmlFor="productType">유형</label>
            <select id="productType" name="productType"/>
            <label htmlFor="productBuyDate">구입 날짜</label>
            <input type="date" id="productBuyDate" name="productBuyDate"/>
            <label htmlFor="productMemo">메모</label>
            <input type="checkbox" id="productMemo" name="productMemo"/>
            <label htmlFor="productMemoDescription">메모 작성</label>
            <input id="productMemoDescription" name="productMemoDescription"/>
            <label htmlFor="productReBuy">재구매 의사</label>
            <input type="radio" id="productReBuying" name="productReBuying"/>
            <label htmlFor="productReBuying">한다</label>
            <input type="radio" id="productReBuying" name="productReBuying"/>
            <label htmlFor="productReBuying">안한다</label>

        </div>
    );
};

export default InputMoney;