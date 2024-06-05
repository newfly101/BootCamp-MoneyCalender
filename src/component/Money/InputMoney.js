import React from 'react';
import classes from './InputMoney.module.css';
import dayjs from "dayjs";

const InputMoney = () => {
    const today = dayjs(new Date()).format('YYYY-MM-DD').toString();

    const [productName, setProductName] = React.useState('');

    const [productPrice, setProductPrice] = React.useState('');
    const [priceFocus, setPriceFocus] = React.useState(true);
    const [formattedPrice, setFormattedPrice] = React.useState('');

    const [productType, setProductType] = React.useState(['식료품']);
    const [selectedType, setSelectedType] = React.useState('식료품');
    const [addProductFlag, setAddProductFlag] = React.useState(false);
    const [addProduct, setAddProduct] = React.useState('');

    const [productDate, setProductDate] = React.useState(today);

    const [productMemo, setProductMemo] = React.useState(false);
    const [productMemoDescription, setProductMemoDescription] = React.useState('');

    const [productReBuy, setProductReBuy] = React.useState(true);


    const onChangeProductName = (event) => {
        setProductName(event.target.value);
        // console.log(productName);
    }
    const onChangeProductPrice = (event) => {
        let regex = /^[0-9]*$/;
        if (regex.test(event.target.value)) {
            setProductPrice(event.target.value);
        }
    }
    const onFocusProductPrice = () => {
        priceFocus ? setPriceFocus(false) : setPriceFocus(true);
        if (productPrice.length >= 4) {
            setFormattedPrice(Number(productPrice).toLocaleString());
        } else {
            setFormattedPrice(productPrice);
        }
    }
    const toggleAddProductType = () => {
        addProductFlag ? setAddProductFlag(false) : setAddProductFlag(true);
    }
    const onChangeSelectedType = (event) => {
        setSelectedType(event.target.value);
    }
    const deleteProductType = () => {
        setProductType(productType.filter(item => item !== selectedType));
        // console.log("삭제 : ",selectedType);
    }
    const onChangeAddProduct = (event) => {
        setAddProduct(event.target.value);
    }
    const onKeyDownAddProduct = (event) => {
        if (event.code === 'Enter' && addProduct.trim().length > 0) {
            if (!productType.includes(addProduct)) {
                setProductType(prevState => [...prevState, addProduct]);
            }
            setAddProductFlag(false);
            setAddProduct('');
        }
    }

    const onChangeProductDate = (event) => {
        setProductDate(event.target.value);
    }
    const onChangeProductMemo = () => {
            setProductMemo(!productMemo);
    }
    const onChangeProductDescription = (event) => {
        setProductMemoDescription(event.target.value);
    }
    const onChangeProductReBuy = (event) => {
        setProductReBuy(event.target.value === "true");
    }

    const onSubmitMoney = (event) => {
        event.preventDefault();
        let submitObject = {
            productName: productName,
            productPrice: productPrice,
            selectedType: selectedType,
            productDate: productDate,
            productMemo: productMemo,
            productMemoDescription: productMemoDescription,
            productReBuy: productReBuy
        };

        console.log(submitObject);
    }

    return (
        <form>
            <div className={classes.mainBox}>
                <div className={classes.boxComponent}>
                    <div className={classes.labelBox}>
                        <label htmlFor="productName">이름</label>
                    </div>
                    <div className={classes.elementBox}>
                        <input id="productName"
                               name="productName"
                               placeholder="상품명을 입력"
                               value={productName}
                               onChange={onChangeProductName}/>
                    </div>
                </div>
                <div className={classes.boxComponent}>
                    <div className={classes.labelBox}>
                        <label htmlFor="productPrice">가격</label>
                    </div>
                    <div className={classes.elementBox}>
                        {priceFocus ?
                            <input id="productPrice"
                                   name="productPrice"
                                   type="text"
                                   placeholder="상품 가격 입력"
                                   value={productPrice}
                                   onChange={onChangeProductPrice}
                                   onBlur={onFocusProductPrice}
                            />
                            :
                            <input id="productPrice"
                                   name="productPrice"
                                   type="text"
                                   placeholder="상품 가격 입력"
                                   value={formattedPrice}
                                   onFocus={onFocusProductPrice}
                            />
                        }
                    </div>
                </div>
                <div className={classes.boxComponent}>
                    <div className={classes.labelBox}>
                        <label htmlFor="productType">유형</label>
                    </div>
                    <div className={classes.elementBox}>
                        <select id="productType" name="productType" onChange={onChangeSelectedType}>
                            {productType && productType.map((item, index) => (
                                <option key={`product-${index}`}>{item}</option>
                            ))}
                        </select>
                        <div className={classes.btnBox}>
                            <button type="button" className={classes.btn} onClick={toggleAddProductType}>유형추가</button>
                            {productType.length > 1 &&
                                <button type="button" className={classes.btn} onClick={deleteProductType}>유형삭제</button>
                            }
                        </div>
                        {addProductFlag &&
                            <input type="text"
                                   name="addProduct"
                                   id="addProduct"
                                   value={addProduct}
                                   onKeyDown={onKeyDownAddProduct}
                                   onChange={onChangeAddProduct}
                            />}
                    </div>
                </div>
                <div className={classes.boxComponent}>
                    <div className={classes.labelBox}>
                        <label htmlFor="productBuyDate">구입 날짜</label>
                    </div>
                    <div className={classes.elementBox}>
                        <input type="date"
                               id="productBuyDate"
                               name="productBuyDate"
                               max={today}
                               value={productDate}
                               onChange={onChangeProductDate}
                        />
                    </div>
                </div>
                <div className={classes.boxComponent}>
                    <div className={classes.labelBox}>
                        <label htmlFor="productMemo">메모</label>
                    </div>
                    <div className={classes.elementBox}>
                        <input type="checkbox"
                               id="productMemo"
                               name="productMemo"
                               value="memo"
                               checked={productMemo}
                               onChange={onChangeProductMemo}
                        />
                        <label>메모 작성</label>
                        {productMemo &&
                            <input id="productMemoDescription"
                                   name="productMemoDescription"
                                   value={productMemoDescription}
                                   onChange={onChangeProductDescription}
                            />
                        }
                    </div>
                </div>
                <div className={classes.boxComponent}>
                    <div className={classes.labelBox}>
                        <label htmlFor="productReBuy1">재구매 의사</label>
                    </div>
                    <div className={classes.elementBox}>
                        <input type="radio"
                               id="productReBuy1"
                               name="productReBuy"
                               value="true"
                               checked={productReBuy}
                               onChange={onChangeProductReBuy}
                        />
                        <label htmlFor="productReBuy1">한다</label>
                        <input type="radio"
                               id="productReBuy2"
                               name="productReBuy"
                               value="false"
                               checked={productReBuy}
                               onChange={onChangeProductReBuy}
                        />
                        <label htmlFor="productReBuy2">안한다</label>
                    </div>
                </div>
                <div className={classes.boxComponent}>
                    <button className={classes.btn} type="submit" onClick={onSubmitMoney}>입력</button>
                </div>
            </div>
        </form>
    );
};

export default InputMoney;