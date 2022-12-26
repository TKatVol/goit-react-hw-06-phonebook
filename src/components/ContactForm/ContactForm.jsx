import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { useEffect } from "react";

import { StyledForm, StyledLabel, StyledInput, StyledButton, ErrorMessage } from "../ContactForm/ContactForm.styled";

const validationSchema = yup.object({
    name: yup.string()
        .required('Name is required')
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),
    number: yup.string()
        .required('Phone number is required')        
        .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"),
});

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm({
        defaultValues: {
            name: "",
            number: "",
        },
        resolver: yupResolver(validationSchema),
    });

    const dispatch = useDispatch();

    const onSubmit = contact => {
        dispatch(addContact(contact));
    };
    
    useEffect(() => {
        reset({
            name: "",
            number: "",
        });
    }, [isSubmitSuccessful, reset]);

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <StyledLabel>Name</StyledLabel>
            <StyledInput {...register("name")} />
            {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
            
            <StyledLabel>Number</StyledLabel>
            <StyledInput {...register("number")} />
            {errors.number && <ErrorMessage>{errors.number?.message}</ErrorMessage>}

            <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
    );
};
