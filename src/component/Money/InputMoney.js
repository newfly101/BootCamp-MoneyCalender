import React from 'react';
import classes from './InputMoney.module.css';

const InputMoney = () => {
    return (
        <div className={classes.mainBox}>
            <div className={classes.boxComponent}>
                <div className={classes.labelBox}>
                    <label htmlFor="productName">이름</label>
                </div>
                <div className={classes.elementBox}>
                    <input id="productName" name="productName"/>
                </div>
            </div>
            <div className={classes.boxComponent}>
                <div className={classes.labelBox}>
                    <label htmlFor="productPrice">가격</label>
                </div>
                <div className={classes.elementBox}>
                    <input id="productPrice" name="productPrice"/>
                </div>
            </div>
            <div className={classes.boxComponent}>
                <div className={classes.labelBox}>
                    <label htmlFor="productType">유형</label>
                </div>
                <div className={classes.elementBox}>
                    <select id="productType" name="productType"/>
                </div>
            </div>
            <div className={classes.boxComponent}>
                <div className={classes.labelBox}>
                    <label htmlFor="productBuyDate">구입 날짜</label>
                </div>
                <div className={classes.elementBox}>
                    <input type="date" id="productBuyDate" name="productBuyDate"/>
                </div>
            </div>
            <div className={classes.boxComponent}>
                <div className={classes.labelBox}>
                    <label htmlFor="productMemo">메모</label>
                </div>
                <div className={classes.elementBox}>
                    <input type="checkbox" id="productMemo" name="productMemo"/>
                    <label>메모 작성</label>
                    <input id="productMemoDescription" name="productMemoDescription"/>
                </div>
            </div>
            <div className={classes.boxComponent}>
                <div className={classes.labelBox}>
                    <label htmlFor="productReBuy1">재구매 의사</label>
                </div>
                <div className={classes.elementBox}>
                    <input type="radio" id="productReBuy1" name="productReBuy"/>
                    <label htmlFor="productReBuy1">한다</label>
                    <input type="radio" id="productReBuy2" name="productReBuy"/>
                    <label htmlFor="productReBuy2">안한다</label>
                </div>
            </div>
        </div>
    );
};

export default InputMoney;