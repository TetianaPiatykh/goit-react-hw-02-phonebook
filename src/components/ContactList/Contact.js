
import { ContactLi, ContactName, DeletBtn } from "components/ContactList/ContactList.styled";
import { FaRegUser } from 'react-icons/fa';

export const ContactItem = ({ id, name, number, deletContactMethod }) => {
    return <ContactLi>
        <ContactName><FaRegUser/> {name} {number}</ContactName>
        <DeletBtn type="button" onClick={() => deletContactMethod(id)}>Delete</DeletBtn>
    </ContactLi>
};