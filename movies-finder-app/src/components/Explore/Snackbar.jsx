import { useState, useEffect } from "react";
import { useMessageStore } from '../../store/useMessageStore'

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
            return () => clearTimeout(timer)
        }, state => [state.message, state.messageType]);
        return () => unsubscribe()
    }, [])

    return (

        <div className={`text-center mx-52 h-10 pt-2 rounded-lg text-white opacity-70 animate-fadeIn ${messageType === 'success' ? 'bg-green-600' : 'bg-red-600'} ${!message && 'hidden'} `} >
            {message && <p>{message}</p>}
        </div >
    )

}

export default Snackbar;