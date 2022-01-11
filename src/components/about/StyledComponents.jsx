import styled from "styled-components";
import { neutral, primaryColors } from '../../utils';


export const Wrapper = styled.div`
    /* height: 200vh; */
    /* border: 1px solid #ff0000; */
    Display: flex;
    justify-content: space-around;
    align-items: center;
    /* position: relative; */
`

export const ParagraphWrapper = styled.div`
    background-color: ${ neutral[300] };
    box-shadow: 0 0px 5px ${ neutral[300]};
    border-radius: 20px;
    height: 200px;
    width: 500px;
    Display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0px 20px;
    /* position: absolute;
    top: 150px;
    left: 200px; */ 
`
 
// export const Curve = styled.div`
//     height: 500px;
//     width: 300px;
//     background-color: ${ primaryColors[400] };
//     /* position: absolute;
//     top: 0;
//     right: 40px; */
//     border-radius: 0 0 200px 50px; 
// `

export const ProfileImg = styled.img`
    height: 500px;
    border-radius: 0 0 200px 50px; 
`