import styled from "styled-components"
import { textColors } from "../colors/colors";

const header = styled.p`
    font-family: 'jetBraines Mono', monospace;
    color: ${props => props.color ? props.color : textColors["text"]};
`;

export const H1 = styled(header)`
    font-size: 2rem;
    font-weight: bold;
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
`;
