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
            <span className={'username'}>User: {user?.username || user?.first_name || user?.last_name || user?.id || 'пусто'}</span>
        </div>
    );
};

export default Header;