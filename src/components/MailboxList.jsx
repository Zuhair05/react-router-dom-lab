import {useState, useEffect} from 'react';
import {Link} from 'react-router';

const MailboxList = ({mailbox}) => {
    return (
        <div>
            <h1>Mailbox List</h1>
            {mailbox.map((box) => (
                <div key={box.id}>
                    <Link to={`/mailBox/${box.id}`}>
                     Mailbox {box.id}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MailboxList;