import {css} from "styled-components"

export const mobile=(props)=>{
        return css`
        @media only screen and (max-width:380px){
                ${props}
        }
   `;
};

export const tablt=(props)=>{
        return css`
        @media only screen and (max-width:720px){
                ${props}
        }
   `;
};