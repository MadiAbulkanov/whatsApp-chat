import { Box, TextField } from "@mui/material";
import { useState } from "react";
import './Login.css';

interface LoginProps {
    onLogin: (idInstance: string, apiTokenInstance: string, phoneNumber: string) => void;
}

const Login = ({ onLogin }: LoginProps) => {
    const [idInstance, setIdInstance] = useState('');
    const [apiTokenInstance, setApiTokenInstance] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleLogin = () => {
        onLogin(idInstance, apiTokenInstance, phoneNumber);
    };

    return (
        <div className="form-wrapper">
            <h2 className="form-title">Вход в чат</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <TextField
                    sx={{
                        margin: '5px', width: '300px',
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#25D366',
                            },
                        },
                    }}
                    id="idInstance-input"
                    label="idInstance"
                    type="text"
                    autoComplete="idInstance"
                    value={idInstance}
                    onChange={(e) => setIdInstance(e.target.value)}
                />
                <TextField
                    sx={{
                        margin: '5px', width: '300px',
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#25D366',
                            },
                        },
                    }}
                    id="apiTokenInstance-input"
                    label="apiTokenInstance"
                    type="text"
                    autoComplete="apiTokenInstance"
                    value={apiTokenInstance}
                    onChange={(e) => setApiTokenInstance(e.target.value)}
                />
                <TextField
                    sx={{
                        margin: '5px', width: '300px',
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#25D366',
                            },
                        },
                    }}
                    id="phoneNumber-input"
                    label="номер телефона собеседника"
                    type="text"
                    autoComplete="номер телефона собеседника"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button className="login-button" onClick={handleLogin}>Войти</button>
            </Box>
        </div>
    );
};

export default Login;