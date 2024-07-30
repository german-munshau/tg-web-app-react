import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'

const Header = () => {
    const {user, onClose} = useTelegram()

    return (
        <div className={'header'}>
            Header
            <Button onClick={onClose}>Закрыть окно</Button>
            <span className={'username'}>first_name: {user?.first_name}</span>
            <span className={'username'}>last_name: {user?.last_name}</span>
            <span className={'username'}>username: {user?.username}</span>
            <span className={'username'}>id: {user?.id}</span>
        </div>
    );
};

export default Header;