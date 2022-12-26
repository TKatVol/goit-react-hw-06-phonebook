import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 10px;
    display: grid;
    justify-items: start;
    border: 2px solid #073b63;
`;

export const StyledLabel = styled.label`
    margin-bottom: 10px;
    font-weight: 800;
`;

export const StyledInput = styled.input`
    margin-bottom: 6px;
`;

export const StyledButton = styled.button.attrs({ type: "submit" })`
    margin-top: 20px;
    padding: 8px;
    background-color: #2d92e0;
    border: none;
    cursor: pointer;
    font-weight: 800;
`;

export const ErrorMessage = styled.p`
    margin: 0;
    padding: 0;
    font-weight: 600;
    color: red;
`;
