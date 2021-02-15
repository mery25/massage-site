import {useEffect, useState, React} from "react"
import "./Notification.sass"
import {CSSTransitionGroup} from "react-transition-group"
const Notification = ({ type, text, autoDelete, autoDeleteTime, onDelete }) => {

    const [ deleted, setDeleted] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && !deleted) {
                setDeleted(true)
            }
        }, autoDeleteTime)
        return () => {
            onDelete()
            clearInterval(interval);
        }
    }, [autoDelete, autoDeleteTime, deleted, onDelete])


    return (
        <CSSTransitionGroup
            transitionName="notification"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
                {!deleted && <div className={"notification " + type} key={type+text}>
                    <span className="notification__message">{text}</span>
                </div>}
        </CSSTransitionGroup>
    )
}

export default Notification