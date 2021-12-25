import styled from "styled-components";
import { primaryColors } from '../../utils'
import { Link } from "react-router-dom";


export const SideBarWrapper = styled.div`
    width: 15%;
    height: 100vh;
    background-color: ${primaryColors[100]};
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    position: fixed;
`

export const Profile = styled.div`
    display: grid;
    place-items : center;
    position: absolute;
    top: 30px;
`

export const MainIcon = styled.img`
    width: 50px;
    border-radius: 50px;
`

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-direction: column;
    position: absolute;
    right: 0;
` 

export const LinkWrapper = styled.div`
    font-weight: 900;
    border-radius: 20px 0 0 20px;
    padding: 10px 30px;
    

    &:hover{
        background-color: white;
    }
`

export const RouterLink = styled(Link)`
    text-decoration: none;
    color: "#ffffff";
    padding: 0px 5px;

`;

export const Icon = styled.img`
    width: 20px;
`

