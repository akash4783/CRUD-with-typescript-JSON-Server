import React from 'react';

const Message = ({ textMessage, textStyle }: any) => {
    return (
        <div>
            <p style={{color:'yellow', fontWeight:600, ...textStyle} }>
                {textMessage}
            </p>
        </div>
    )
}
export default Message;