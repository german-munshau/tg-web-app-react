import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'

const Header = () => {

    const {user, onClose, tg} = useTelegram()

    return (
        <div className={'header'}>
            {/*<Button onClick={onClose}>Закрыть</Button>*/}
            <Button onClick={() => tg.close()}>Закрыть2</Button>
            <span className={'username'}>{user?.username}</span>
        </div>
    );
};

export default Header;