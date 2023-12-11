import React from 'react';

export const Comments = (props) => {
    let c = props.comments;

    return <div>

        <div>
            <div><b>{c.id}.</b>
                <span>{c.name}</span>
                <div>{c.email}</div>
            </div>
            <div><b>Information:</b> {c.body}.</div>
        </div>
    </div>
}

export default Comments;