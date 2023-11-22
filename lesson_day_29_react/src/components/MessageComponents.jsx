function MessageComponent({showMessage}) {
    return (
        <div>
            {showMessage && <p>This message is conditionally rendered!</p>}
        </div>
    );
}

export default MessageComponent;