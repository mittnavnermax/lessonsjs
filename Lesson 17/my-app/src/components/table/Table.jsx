import React, { useContext } from 'react';
import Td from './td/Td';
import { ContactsContext } from '../../App';
import RemoveButton from '../removeButton/RemoveButton';
import './Table.css'

function Table () {
    const contacts = useContext(ContactsContext);

    function removeContact (id) {
        contacts.setContacts(contacts.contacts.filter(el => el.id !== id));

    }

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.contacts.length ? (
                        contacts.contacts.map((el, index) => {
                        return (
                            <tr key={el.id} className="table__client">
                            <Td value={index + 1} />
                            <Td value={el.name.split(' ')[0]} />
                            <Td value={el.name.split(' ')[1]} />
                            <Td value={el.phone} />
                            <Td value={<RemoveButton removeContact={removeContact} id={el.id} />} />
                            </tr>
                        );
                        })
                    ) : (
                        <tr className="table__client">
                        <Td value={'no clients found'} />
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )

}

export default Table;