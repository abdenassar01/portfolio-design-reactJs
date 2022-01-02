import styled from "styled-components";

export const  Icon = styled.img`
    width: ${props => props.width};
    height: ${props => props.width};
    margin-right: ${props => props.margin? props.margin: 0};
`