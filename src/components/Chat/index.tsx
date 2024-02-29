import React, { useEffect, useState } from "react";
import { signalingProvider } from "../../providers/signaling-provider";
import { useMessaging } from "../../hooks/use-messaging";
import { Message } from "../../types";

const Chat = () => {
    const [messages, sendMessage] = useMessaging();
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        signalingProvider.init();
    }, []);

    const onSend = () => {
        const message = {
            username: "user 1",
            text: inputValue,
            date: new Date().toISOString(),
        } as Message;

        sendMessage(message);
        setInputValue("");
    };

    return (
        <div>
            <h1>Chat</h1>
            {messages.map((message, index) => (
                <div key={index}>
                    <p>
                        {message.username}: {message.text}
                    </p>
                </div>
            ))}
            <input
                type="text"
                placeholder="Type your message"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={onSend}>Send Message</button>
        </div>
    );
};

export default Chat;
