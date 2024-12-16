import { useState, useEffect } from "react";
import { useMessageStore } from "../store/useMessageStore";

const Snackbar = () => {

    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')


    useEffect(() => {

        const unsubscribe = useMessageStore.subscribe(({ message, messageType }) => {
            setMessage(message);
            setMessageType(messageType);

            const timer = setTimeout(() => {
                setMessage('')
                setMessageType('')
            }, 3000)

            return clearTimeout(timer)
        }, state => [state.message, state.messageType]);

        return unsubscribe()

    })

    return (
        <div className="">
            {message && <p>{message}</p>}
        </div>
    )




}