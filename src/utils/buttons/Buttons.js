import styled from "styled-components";
import { primaryColors , buttonStatus, statusColors} from "../colors/colors"
import { NavLink } from "react-router-dom";

const Button = styled(NavLink)`
    padding: 7px 42px;
    text-decoration: none;
    border: none;
    border-radius: 50px;
    font-family: 'jetBraines Mono', monospace;
    font-weight: bold;
    cursor: pointer;
`;

const MainButton = styled(Button)`
    border: 1px solid ${primaryColors[100]};
`;

export const PrimaryButton = styled(MainButton)`
    background-color: ${primaryColors[100]};
    color: white;

    &:hover{
        background-color: transparent;
        color: ${primaryColors[100]}
    }

    &:focus{
        color: ${buttonStatus.focus};
    }

    &:disabled{
        color: ${buttonStatus.disabled};
    }
`;

export const SecondaryButton = styled(MainButton)`
    background-color: transparent;
    color: ${primaryColors[100]};

    &:hover{
        background-color: ${primaryColors[100]};
        color: white;
    }

    &:focus{
        color: ${buttonStatus.focus};
    }

    &:disabled{
        color: ${buttonStatus.disabled};
    }
`

export const TertiaryButton = styled(MainButton)` 
    border: none;
    background-color: transparent;
    color: ${primaryColors[100]};

    &:hover{
        color: ${primaryColors[200]};
    }

    &:focus{
        color: ${buttonStatus.focus};
    }

    &:disabled{
        color: ${buttonStatus.disabled};
    }
`

export const WarningButton = styled(Button)` 
    background-color: ${statusColors.warning[100]};
`

export const ErrorButton = styled(Button)` 
    background-color: ${statusColors.error[100]};
`

export const SuccessButton = styled(Button)` 
    background-color: ${statusColors.succes[200]};
`