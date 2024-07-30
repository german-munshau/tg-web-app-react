import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'

const Header = () => {
    const {user, onClose} = useTelegram()

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть окно</Button>
            <div className={'username_info'}>
                <span className={'username'}>User: {user?.first_name} {user?.last_name}</span>
                {/*<span className={'username'}>last_name: {user?.last_name}</span>*/}
                {/*<span className={'username'}>username: {user?.username}</span>*/}
                {/*<span className={'username'}>id: {user?.id}</span>*/}
            </div>
        </div>
    );
};

export default Header;