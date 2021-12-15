import PropTypes from 'prop-types';

import s from './ContactList.module.css'

const ContactList = ({ contactsData, onRemoveContact }) => {
    return (<ul>
        {contactsData.map(item => {
            return (<li key={item.id} className={s.listItem}>
                <p>{item.name} :</p>
                <p>{item.number}</p>
                <button type="button" onClick={() => onRemoveContact(item.id)}>Delete</button>
            </li>)
        })}
    </ul>)

}

export default ContactList;

ContactList.prototypes = {
    contactsData: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired,
}