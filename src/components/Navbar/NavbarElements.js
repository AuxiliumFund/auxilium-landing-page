import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';


export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: all 0.8s ease-in-out;
}
`

export const Logo = styled.img`
height: 150px;
width: 150px;
justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
margin-left: -200px;

@media screen and (max-width: 760px) {
    height: 100px;
    width: 100px;
    display: block;
    position: absolute;
    top: -50px;
    right: 220px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #f5f5f5;
}
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`


export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #f5f5f5;
}
`

export const NavMenu = styled.div`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 760px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLink = styled(LinkScroll)`
color: #f5f5f5;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover {
    transition: all 0.2s ease-in-out;
    background: none;
    text-decoration-line: underline;
    text-decoration-thickness: 4px;
    text-decoration-color: #945147;
  }
`

export const NavButton = styled.nav`
display: FaFileExcel;
align-items: center;

@media screen and (max-width: 760px) {
    display: none;
}
`

export const NavButtonLinkDocs = styled(LinkRouter)`
color: #f5f5f5;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover {
    transition: all 0.2s ease-in-out;
    background: none;
    text-decoration-line: underline;
    text-decoration-thickness: 4px;
    text-decoration-color: #945147;
  }
`

export const NavButtonLink = styled(LinkRouter)`
background: none;
white-space: nowrap;
padding: 10px 22px;
color: #f5f5f5;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: none;
    color: #945147;
}
`
