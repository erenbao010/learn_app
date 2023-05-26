import { SideBar } from "components/SideBar";
import styled from "styled-components";
import { Header } from "components/Header";
const LayoutStyled = styled.div`
    background-color: #CAEAE6;
  min-height: 100vh;
  .right {
    float: right;
    width: 70%;
  }
`
const SideBarStyled = styled.div`
     float: left;
  width: 30%;
`
const ContentStyled = styled.div`
    margin-top: 130px;
    height: 100vh;
`
const PrimaryLayout = ({children}) => {
    return (
<LayoutStyled>
    <SideBarStyled>
        <SideBar>
        </SideBar>
    </SideBarStyled>
    <div className="right">
        <Header></Header>
        <ContentStyled>{children}</ContentStyled>
    </div>
</LayoutStyled>
    );
};
export default PrimaryLayout;