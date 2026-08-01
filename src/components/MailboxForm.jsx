import {useState} from 'react'
import {useNavigate} from 'react-router';

const MailboxForm = ({addMailbox, mailbox}) => {

    const navigate = useNavigate();

    const initialState = {
        boxSize: '',
        boxOwner: ''
    }

    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            id: mailbox.length +1 ,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        addMailbox(formData);
        setFormData(initialState);
        navigate('/mailBox');
    }

return (
    <div>
        <h1>Mailbox Form</h1>
        <form onSubmit={handleSubmit}>
            box size: <input type="text" name="boxSize" value={formData.boxSize} onChange={handleChange} />
            box owner: <input type="text" name="boxOwner" value={formData.boxOwner} onChange={handleChange} />
            <button type="submit">Add Box</button>
        </form>
    </div>
 )
}

export default MailboxForm;
