import { useState } from "react";
import Chat from "../components/Chat/Chat";
import Login from "../components/Login/Login";

const MainPage = () => {
    const [idInstance, setIdInstance] = useState('');
    const [apiTokenInstance, setApiTokenInstance] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleLogin = (idInstance: string, apiTokenInstance: string, phoneNumber: string) => {
        setIdInstance(idInstance);
        setApiTokenInstance(apiTokenInstance);
        setPhoneNumber(phoneNumber);
    };

    return (
        <div>
            {(!idInstance && !apiTokenInstance && !phoneNumber) ? (
                <Login onLogin={handleLogin} />
            ) : (
                <Chat idInstance={idInstance} apiTokenInstance={apiTokenInstance} phoneNumber={phoneNumber} />
            )}
        </div>
    );
};

export default MainPage;