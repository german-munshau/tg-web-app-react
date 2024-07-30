import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'

const Header = () => {
    const {onClose,user} = useTelegram()

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть окно</Button>
            <span>User: {user?.first_name} {user?.last_name}</span>
        </div>
    );
};

export default Header;