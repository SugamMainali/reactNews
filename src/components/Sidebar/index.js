import React from 'react';
import { SidebarMenu,SidebarRoute,SideBtnWrap,SidebraLink,SidebarWrapper,SidebarContainer,CloseIcon,Icon} from './SidebarElement'

const Sidbar =(props)=>{
    return( 
        <React.Fragment>
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebraLink to="about" onClick={props.toggle}>
                     About
                    </SidebraLink>
                    <SidebraLink to="discover" onClick={props.toggle}>
                     Discover
                    </SidebraLink>
                    <SidebraLink to="services" onClick={props.toggle}>
                     Services
                    </SidebraLink>
                    <SidebraLink to="signup" onClick={props.toggle}>
                    Sign Up
                    </SidebraLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin' onClick={props.toggle}>
                    Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
        </React.Fragment>
    )
}

export default Sidbar;