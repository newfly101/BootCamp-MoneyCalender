import React from 'react';
import classes from './filter.module.css';

const Filter = () => {
    return (
        <div className={classes.mainBox}>
            <div className={classes.boxComponent}>
                <select
                    id="productType"
                    name="productType"
                >
                    <option id="productTypeName" name="productTypeName" value="productTypeName">유형 필터</option>
                </select>
                <select
                    id="productType"
                    name="productType"
                >
                    <option id="productTypeName" name="productTypeName" value="productTypeName">정렬 기준</option>
                </select>
                <div className={classes.labelBox}>
                    <label htmlFor="productBuyDate">시작 기간</label>
                </div>
                <div className={classes.elementBox}>
                    <input type="date"
                           id="productBuyDate"
                           name="productBuyDate"
                           // max={today}
                           // value={productDate}
                           // onChange={onChangeProductDate}
                    />
                </div>
                <div className={classes.labelBox}>
                    <label htmlFor="productBuyDate">끝 기간</label>
                </div>
                <div className={classes.elementBox}>
                    <input type="date"
                           id="productBuyDate"
                           name="productBuyDate"
                           // max={today}
                           // value={productDate}
                           // onChange={onChangeProductDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filter;