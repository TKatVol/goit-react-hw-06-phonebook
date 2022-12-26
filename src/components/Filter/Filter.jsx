import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filterSlice";

import { StyledLabel, StyledInput } from "../Filter/Filter.styled";

export const Filter = () => {
    const dispatch = useDispatch();
    const onChange = event => {
        dispatch(filterContacts(event.target.value));
    };

    return (
        <>
            <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
            <StyledInput type="text" name="filter" onChange={onChange} />
        </>
    )
};
