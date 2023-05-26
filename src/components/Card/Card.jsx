import styled from "styled-components";
import greenArrow from "assets/green-arrow.svg";
import redArrow from "assets/red-arrow.svg";
import ethIcon from "assets/eth-icon.svg";
import { Button } from "../Button";
 const ButtonWrapper = styled.button`
  width: 115px;
  height: 46px;
  border: 1px solid #e9e9e9;
  border-radius: 12px;
  background: #ffffff;
  font: 16px;
  img {
    color: #36bc4c;
  }
`;
// export const Button = ({btnNext}) => {
//     return <ButtonWrapper><img src={btnNext <0 ? "red" : "blue"}></img></ButtonWrapper>
// }
const StyleCard = styled.div`
  width: 164px;
  height: 167px;
  left: 1060px;
  top: 128px;
  background: #ffffff;
  border-radius: 12px;
  .title {
    color: black;
    margin-right: 40px;
    margin-bottom: 10px;
  }
  .ammount-wrapper {
    color: green;
    margin-bottom: 12px;
  }
  .amount {
    color: #27262E;
  }
  .ammount-wrapper2{

/* Text/color1 */

color: #27262E;
    margin-bottom: 12px;
  }
  .eth {
    width: 24px;
height: 24px;
  }
  .title {
    position: absolute;
width: 64px;
height: 18px;
left: 1268px;
top: 152px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
color: #747475;
  }
`;

const StyledButton = styled.button`
  width: 115px;
  height: 46px;
  border: 1px solid #e9e9e9;
  border-radius: 40px;
  background: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => (props.percent < 0 ? "red" : "#747475")};
  img {
    margin-right: 8px;
  }
`

export const Card =({title, amount, content,percent}) => {
  return <StyleCard>
    <div className='title'>{title}</div>
    { amount?
      <div className='ammount-wrapper'>
        <img className='eth' src={ethIcon} alt="eth-icon"></img><span className='amount'>{amount} ETH</span> 
      </div>:
    <div className="ammount-wrapper2">
    <span className="ROI-content">{content}</span> %
  </div>
    }
    <Button percent={percent} boderColor="#E9E9E9">{percent}%</Button>
  </StyleCard>
}
