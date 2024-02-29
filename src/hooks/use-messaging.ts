import { useEffect, useState } from "react";
import { signalingProvider } from "../providers/signaling-provider";
import { Message } from "../types";
import { Message_Types, Messages_Event_Types } from "../constants";

export const useMessaging = (): [Message[], (message: Message) => void] => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const newMessageOff = signalingProvider.eventEmitter.on(
            Messages_Event_Types.ADD_MESSAGE,
            onNewMessage
        );
        const loadMessagesOff = signalingProvider.eventEmitter.on(
            Messages_Event_Types.UPDATE_MESSAGES,
            onLoadMessages
        );
        return () => {
            newMessageOff();
            loadMessagesOff();
        };
    }, []);

    const onNewMessage = (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };
    const onLoadMessages = (messages: Message[]) => {
        return setMessages(messages);
    };
    const sendMessage = (message: Message) => {
        signalingProvider.sendMessage(Message_Types.NEW_MESSAGE, message);
    };

    return [messages, sendMessage];
};
