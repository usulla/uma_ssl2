import Contacts from "../src/pages/Contacts/Contacts.jsx";
import App from "../src/components/App/App.jsx";
import appData from "../src/components/App/appData.json";

function ContactsPage() {
  const { dataContacts } = appData;
  return (
    <App>
      <Contacts dataContacts={dataContacts} />
    </App>
  );
}
export default ContactsPage;
