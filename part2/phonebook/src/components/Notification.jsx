const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        //if message includes "Added" or "updated" then display message with .success styling from index.css otherwise display message with no styling
        <div className={message.includes("Added") || message.includes("updated") ? "success" : ""}>
            {message}
        </div>
    )
}
  
export default Notification
