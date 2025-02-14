
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Chat.css';
import avatar from '../../assets/avatar.jpg';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface ChatProps {
    idInstance: string;
    apiTokenInstance: string;
    phoneNumber: string;
}

interface Message {
    text: string;
    sender: string;
}

const Chat = ({ idInstance, apiTokenInstance, phoneNumber }: ChatProps) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);

    const apiUrl = 'https://api.green-api.com';

    const sendMessage = async () => {
        await axios.post(`${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
            chatId: `${phoneNumber}@c.us`,
            message: message,
        });
        setMessages([...messages, { text: message, sender: 'me' }]);
        setMessage('');
    };

    const fetchMessages = async () => {
        const response = await axios.get(`${apiUrl}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`);
        if (response.data && response.data.body && response.data.body.messageData) {
            console.log(response.data.body.messageData?.textMessageData.textMessage);
            
            const incomingMessage = response.data.body.messageData?.textMessageData.textMessage;

            if (incomingMessage) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: incomingMessage, sender: 'other' }
                ]);
            }
            await axios.delete(`${apiUrl}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${response.data.receiptId}`)
        }
    };

    useEffect(() => {
        setInterval(fetchMessages, 10000);
    }, []);

    return (
        <div className='chat-page'>
            <div className='info-section'>
                <img className='photo' src={avatar}></img>
                <h2>{phoneNumber}</h2>
            </div>
            <div className='chat-messages'>
                {messages.map((message, index) => (
                    <div key={index} className={message.sender === 'me' ? 'my-message' : 'other-message'}>
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>
            <input
                className='message-input'
                type="text"
                placeholder="Сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button sx={{  borderRadius: '20px', borderColor: '#25D366' }} variant="outlined" endIcon={<SendIcon sx={{ color: '#25D366' }} />} onClick={sendMessage} />
        </div>
    );
};

export default Chat;