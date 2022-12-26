import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { StyledContainer, StyledTitleH1, StyledTitleH2 } from "../components/App.styled";

export const App = () => {
  
  return (
    <StyledContainer>
      <StyledTitleH1>Phonebook</StyledTitleH1>
      <ContactForm />
    
      <StyledTitleH2>Contacts</StyledTitleH2>
      <Filter />
      <ContactList />
    </StyledContainer>
  );
};

