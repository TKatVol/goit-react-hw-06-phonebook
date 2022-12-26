import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';

import { StyledList, StyledItem, StyledContact, StyledButton } from "../ContactList/ContactList.styled";

export const ContactList = () => {
    const contacts = useSelector(getContacts) ;
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    return (
        <StyledList>
            {visibleContacts.map(({ id, name, number }) => {
                return (
                    <StyledItem key={id}>
                        <StyledContact>{name}: {number}</StyledContact>
                        <StyledButton type="button" onClick={()=>dispatch(deleteContact(id))}>Delete</StyledButton>
                    </StyledItem>
                );
            })}
        </StyledList>
    );
};
