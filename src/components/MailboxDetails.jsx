import {useParams} from 'react-router'

const MailboxDetails = ({mailbox}) => {

    const {mailboxId} = useParams();

    const selectedBox = mailbox.find((box) => 
        box.id === Number(mailboxId)
);

if(!selectedBox) {
    return <h1>Mailbox not found</h1>
}

    return (
        <div>
            <h1>Mailbox {mailboxId}</h1>

            <h3>Details</h3>
            <p>Boxholder: {selectedBox.boxOwner}</p>
            <p>Box size: {selectedBox.boxSize}</p>
            <div>

            </div>
        </div>
    )
}

export default MailboxDetails;