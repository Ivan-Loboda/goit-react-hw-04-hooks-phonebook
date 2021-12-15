import { useState } from 'react';
import PropTypes from 'prop-types';


function ContactForm({ onSubmit }) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                break;
        }
    };

    const reset = () => {
        // this.setState({ name: '', number: '' })
        setName('');
        setNumber('');
    };

    const formSubmit = (e) => {
        e.preventDefault()
        onSubmit(name, number)
        reset();
    }


    return (
        <form onSubmit={formSubmit}>
            <label> Name
                <input
                    value={name}
                    onChange={handleInputChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            <label> Number
                <input
                    value={number}
                    onChange={handleInputChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
    )
}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}