import Contacts from './components/API/contacts'
import { useState, useEffect, createContext} from 'react';
import Table from './components/table/Table';
import AddContact from './components/addContact/AddContact';

export const ContactsContext = createContext();

function App() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		async function getContacts() {
			try {
				const data = await Contacts.getContacts();
				setContacts(data);
			} catch (e) {
				console.error(e)
			}
		}
		getContacts();
	  }, [])

	return (
		<main>
			<ContactsContext.Provider value={{ contacts, setContacts }}>
				<Table />
				<AddContact />
			</ContactsContext.Provider>
		</main>
	);
}

export default App;
