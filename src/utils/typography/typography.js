import styled from "styled-components"

const header = styled.p`
    color: ${props => props.theme.fontColor };
    font-weight: ${props => props.bold ? "bold" : "100"};
`;

export const H1 = styled(header)`
    font-size: ${props => props.large ? " 2.5rem" : "1.8rem"};
`; 

export const H2 = styled(header)`
    font-size: 1.6rem;
`; 

export const H3 = styled(header)`
    font-size: 1.4rem;
`;

export const H4 = styled(header)`
    font-size: 1.2rem;
`;

export const H5 = styled(header)`
    font-size: 1.1rem;
`;

export const Paragraph = styled(header)`
    font-size: 1rem;
`;

export const HelperText = styled(header)`
    font-size: 0.8rem;
`;

export const CopyrightText = styled(header)`
    font-size: 0.7rem;
    text-align: center;
`;
