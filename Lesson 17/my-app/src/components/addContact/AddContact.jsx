import React, {useContext, useRef} from "react";
import { ContactsContext } from "../../App";
import Input from "../input/Input";
import useInput from "../../hooks/useInput";
import Popup from "reactjs-popup";
import './AddContact.css'

function AddContact () {
    const ref = useRef();
    const closeTooltip = () => {
        removeValue();
        ref.current.close()
    };

    const name = useInput('');
    const surname = useInput('');
    const phone = useInput('');

    const contacts = useContext(ContactsContext);

    function removeValue () {
        name.onChange();
        surname.onChange();
        phone.onChange();
    };

    function newContact (e) {
        e.preventDefault();
        if (
        name.value.trim() !== '' &&
        surname.value.trim() !== '' &&
        phone.value.trim() !== ''
        ) 
        {
            const newContact = {
                name: `${name.value} ${surname.value}`,
                phone: phone.value,
                id: Date.now(),
            };
            contacts.setContacts([...contacts.contacts, newContact]);
        }
        closeTooltip();
    };

    return (
        <Popup 
            trigger={<button className="popup__button"> Add contact</button>} 
            position="top center" 
            ref={ref} 
            onClose={closeTooltip}
        >
            <div className="popup__box">
                <form onSubmit={newContact}>
                    <Input
                        value={name.value}
                        onChange={name.onChange}
                        placeholder="Name"
                    />
                    <Input
                        value={surname.value}
                        onChange={surname.onChange}
                        placeholder="Surname"
                    />
                    <Input
                        value={phone.value}
                        onChange={phone.onChange}
                        placeholder="Phone"
                    />
                    <div className="form-buttons">
                        <button className="popup__form-button" type="submit"> Save</button>
                        <button className="popup__form-button" type="button" onClick={closeTooltip}> Close</button>
                    </div>
                </form>

            </div>

        </Popup>

    )

}

export default AddContact;