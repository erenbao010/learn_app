import styled from "styled-components";
import avatar from "assets/avatar.svg";
import searchIcon from "assets/search-normal.svg";
import notiIcon from "assets/noti.svg";

const HeaderStyled = styled.div`
    padding: 30px;
    display: flex;
.search-wrapper{
width: 461px;
height: 56px;
left: 324px;
top: 32px;
position: absolute;
background: #FFFFFF;
border-radius: 35px;
}
.search-input{
    width: 275px;
height: 21px;
border: none;
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
/* identical to box height */

display: flex;
align-items: flex-end;
font-feature-settings: 'salt' on;

/* Text/placeholder */

color: #B9B8BC;
flex: none;
.search-icon{
    position: absolute;
width: 24px;
height: 24px;
left: 0px;
top: 0px;
}
.user-info{
    
}
.noti-icon{
    box-sizing: border-box;

position: absolute;
width: 56px;
height: 56px;
left: 1272px;
top: 32px;

background: #FFFFFF;
/* Border */

border: 1px solid #E9E9E9;
}
}
`
const Header= () =>{
    return (
        <HeaderStyled>
            <span className="search-wrapper">
                <img classname="search-icon" src={searchIcon} alt="search-icon"></img>
                <input 
                className="search-input"
                placeholder="Search Item, Collection and Account.."
                type="text"></input>
            </span>
            <div className="user-info">
                <div className="noti-icon">
                    <img src={notiIcon} alt="notify" />
                </div>
                <img classname="avatar-icon"src={avatar} alt="avatar" />
            </div>
        </HeaderStyled>
    );
}
export default Header;