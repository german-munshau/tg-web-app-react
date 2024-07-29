import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'

const Header = ({close}) => {
    const {user, onClose} = useTelegram()

    return (
        <div className={'header'}>
            {/*<Button onClick={onClose}>Закрыть окно</Button>*/}
            <Button onClick={close}>Закрыть окно</Button>
            <span className={'username'}>User: {user?.username}</span>
        </div>
    );
};

export default Header;