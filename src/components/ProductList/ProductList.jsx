import React, {useCallback, useEffect, useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import './ProductList.css'
import {useTelegram} from "../../hooks/useTelegram";


const products = [
    {id: 1, title: 'Джинсы', price: 100, description: 'Синий цвет, прямая модель'},
    {id: 2, title: 'Куртка2', price: 2000, description: 'Синий цвет, прямая модель'},
    {id: 3, title: 'Джинсы2', price: 300, description: 'Зеленый цвет, прямая модель'},
    {id: 4, title: 'Куртка3', price: 4000, description: 'Синий цвет, прямая модель'},
    {id: 5, title: 'Джинсы10', price: 10000, description: 'Серый цвет, прямая модель'},
    {id: 6, title: 'Куртка6', price: 50, description: 'Леопардовый цвет, прямая модель'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}
const ProductList = () => {

    const [addedItems, setAddedItems] = useState([])
    const {tg, queryId} = useTelegram()


    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }, [addedItems,queryId])


    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)

        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])


    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id)
        let newItems = []

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id)
        } else {
            newItems = [...addedItems, product]
        }
        setAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem product={item}
                             onAdd={onAdd}
                             className={'item'}/>
            ))}
        </div>
    );
};

export default ProductList;