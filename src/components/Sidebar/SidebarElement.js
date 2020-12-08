import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    display: grid;
    align-items:center;
    background : #0d0d0d;
    top:${({isOpen})=>(isOpen ? '0':'-100%')};
    left:0;
    transition : 0.3s ease-in-out;
    opacity : ${({ isOpen }) =>(isOpen ? '1' : '0')};
`

export const CloseIcon = styled(FaTimes)`
 color:#fff
`

export const Icon = styled.div`
 position:absolute;
 top:1.2rem;
 right:1.5rem;
 background: transparent;
 font-size : 2rem;
 cursor : pointer;
 outline:none;
`

export const SidebarWrapper = styled.div`
 color :#fff;
`

export const SidebraLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content :center;
    text-decoration:none;
    font-size:1.5rem;
    list-style:none;
    trasition:0.2s ease-in-out;
    text-decoration:none;
    color:#fff;
    cursor:pointer;

    &:hover{
        color:#01bf71;
        trasition:0.2s ease-in-out;
    }
`
export const SidebarMenu = styled.ul`
display:grid ;
grid-template-columns:1fr;
grid-template-rows:repeat(6,80px);
text-align:center;

@media (max-width:480px){
    grid-template-rows:repeat(6,60px);
}
`

export const SideBtnWrap = styled.div`
display:flex;
justify-content:center;
`

export const SidebarRoute=styled(LinkR)`
border-radius:50px;
white-space:nowrap;
background:#01bf71;
padding: 16px 64px;
color: #010606;
font-size:1rem;
cursor:pointer;
border:none;
outline:none;
list-style :none;
transition : all 0.2s ease-in-out;
text-transform: capitalize;
text-decoration:none;

&:hover,
&:focus{
   transition : all 0.2s ease-in-out;
   background : #fff;
   color :#010606;
}
`

