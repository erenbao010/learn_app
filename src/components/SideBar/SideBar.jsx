import React from "react";
import styled from "styled-components";
import donutIcon from "assets/donut-icon.svg";
import dashBoardIcon from "assets/category.png";
import marketIcon from "assets/shop.svg";
import judgeIcon from "assets/judge.svg";
import cryptoIcon from "assets/buy-crypto.svg";
import walletIcon from "assets/wallet-3.svg";
import lovelyIcon from "assets/lovely.svg";
import clockIcon from "assets/clock.svg";
import settingsIcon from "assets/setting.svg";
import lightIcon from "assets/light-icon.svg";
import ethBlackIcon from "assets/Eth-black.svg";
import addIcon from "assets/add_icon.svg";
import rightArrow from "assets/right_arrow.svg";
import ethereumImage from "assets/Ethereum.svg";
const StyleSideBar = styled.div`
  .nft-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;
    width: 94px;
    height: 51px;
  }
  .bottom-text {
    width: 82px;
    height: 13px;
    font-weight: 700;
    font-size: 10px;
    font-family: "DM Sans";
    font-style: normal;
    line-height: 13px;
    font-feature-settings: "salt" on;
    color: #7a797d;
  }
  .upper-text {
    width: 94px;
    height: 36px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    font-feature-settings: "salt" on;
    color: #27262e;
  }

  .sidebar {
    background: white;
    justify-content: space-around;
    height: 1024px;
    width: 292px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    position: absolute;
  }
  .frame1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;
    position: absolute;
    width: 166px;
    height: 56px;
    left: 32px;
    top: 32px;
  }
  .frame2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 125px;
    height: 24px;
    left: 32px;
    top: 142px;
  }
  //design frame 3 with icon and "market"
  .frame3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;
    position: absolute;
    width: 93px;
    height: 24px;
    left: 32px;
    top: 190px;
  }
  .frame4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 125px;
    height: 24px;
    left: 32px;
    top: 238px;
  }
  .profile {
    /* Profile */
    position: absolute;
    width: 58px;
    height: 16px;
    left: 32px;
    top: 302px;

    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */

    letter-spacing: 0.14em;
    text-transform: uppercase;

    /* Text/color1 */

    color: #27262e;
  }
  //frame 5 design my portfolio with icon buy-crypto
  .frame5 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 131px;
    height: 24px;
    left: 32px;
    top: 342px;
  }
  .frame6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 88px;
    height: 24px;
    left: 32px;
    top: 390px;
  }
  .frame7 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 118px;
    height: 24px;
    left: 32px;
    top: 438px;
  }
  .frame8 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 95px;
    height: 24px;
    left: 32px;
    top: 486px;
  }
  .frame9 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 103px;
    height: 24px;
    left: 32px;
    top: 534px;
  }
  .Other {
    position: absolute;
    width: 46px;
    height: 16px;
    left: 32px;
    top: 598px;

    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */

    letter-spacing: 0.14em;
    text-transform: uppercase;

    /* Text/color1 */

    color: #27262e;
  }
  .frame10 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 125px;
    height: 24px;
    left: 32px;
    top: 641px;
  }
  .balance {
    position: absolute;
    width: 228px;
    height: 220px;
    left: 32px;
    top: 772px;
    padding: 5%;
    /* Color/linier */
    background: linear-gradient(228.89deg, #5429ff 1.12%, #bbaaff 100%);
    border-radius: 16px;
    margin-left: -10px;
  }
  .frame11 {
    display: flex;
    flex-direction: row;
justify-content: space-around;
    align-items: center;
    padding: 14px 16px;
    gap: 21px;
    margin-top: 18px;
    margin-left: 14px;
    margin-right: 16px;
    padding: 2%;
    position: absolute;
    width: 196px;
    height: 49px;
    left: 16px;
    top: 155px;
    background: #ffffff;
    border-radius: 12px;
  }
  .text-your-balance {
    text-align: center;
    margin-top: 32px;
    color: #e0dee6;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
  .eth-blackicon {
    width: 20px;
    height: 20px;
  }
  .number-eth {
    text-align: center;
    width: 227px;
    height: 39px;

    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 39px;
    /* identical to box height */

    /* Color/white */

    color: #ffffff;

    /* Inside auto layout */
  }
  .eth-balance {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 51px;
    height: 20px;
    margin-left: 83px;
    margin-top: 16px;
    margin-bottom: 24px;
  }
  .text-eth {
    width: 23px;
    height: 16px;

    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */

    /* Color/white */

    color: #ffffff;
  }
  .ethereum-image {
    background-image: #ededed;
    position: absolute;
    width: 92.74px;
    height: 151.02px;
    left: 13.33px;
    top: 41px;
    opacity: 0.24;
    margin-top: 15px;
    margin-left: 10px;
  }
  .top-up-balance {
    width: 104px;
    height: 21px;
    margin-top: 14px;
    margin-bottom: 14px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    /* Text/color1 */

    color: #27262e;
  }
  .next-arrow {
    position: absolute;
    left: 37.12%;
    right: 33.3%;
    top: 17%;
    bottom: 17%;
    border: 1.5px solid #817c8e;
  }
  .addIcon {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 4px;
    gap: 10px;
    margin-left: 15px;
    width: 20px;
    height: 20px;
    /* Color/primary */
    background: #5429ff;
    border-radius: 20px;
  }
`;
// export Sidebar to Appjs
export const SideBar = (props) => {
  return (
    <StyleSideBar>
      <div className="sidebar">
        <div className="frame1">
          <img className="eth" src={donutIcon} alt="eth-icon"></img>
          <div className="nft-right">
            <div className="upper-text">MyNFT</div>
            <span className="bottom-text">NFT MarketPlace</span>
          </div>
        </div>
        <div className="frame2">
          <img src={dashBoardIcon} alt="donut-icon"></img>
          <span> Dashboard</span>
        </div>
        <div className="frame3">
          <img src={marketIcon} alt="market-icon"></img>
          <span>Market</span>
        </div>
        <div className="frame4">
          <img src={judgeIcon} alt="market-icon"></img>
          <span>Active Bids</span>
        </div>
        <div className="profile">Profile</div>
        <div className="frame5">
          <img src={cryptoIcon} alt="buy-crypto" />
          <div>My Portfoilo</div>
        </div>
        <div className="frame6">
          <img src={walletIcon} alt="wallet" />
          <div>Wallet</div>
        </div>
        <div className="frame7">
          <img src={lovelyIcon} alt="lovely-icon" />
          <div>Favourites</div>
        </div>
        <div className="frame8">
          <img src={clockIcon} alt="clock-icon" />
          <div>History</div>
        </div>
        <div className="frame9">
          <img src={settingsIcon} alt="setting" />
          <div>Settings</div>
        </div>
        <div className="Other">Other</div>
        <div className="frame10">
          <img src={lightIcon} alt="light-icon" />
          <div>Light Mode</div>
        </div>
        <div className="balance">
          <div className="text-your-balance">Your Balance</div>
          <div className="number-eth">1,034.02</div>
          <div className="eth-balance">
            <img
              classname="eth-blackicon"
              src={ethBlackIcon}
              alt="eth-black-icon"
            />
            <span className="text-eth">ETH</span>
          </div>

          <div className="frame11">
            <img className="addIcon" src={addIcon} alt="add-icon" />
            <span className="top-up-balance">Top Up Balance</span>
            <img classname="next-arrow" src={rightArrow} alt="next-icon" />
          </div>
          <div>
            <img
              className="ethereum-image"
              src={ethereumImage}
              alt="ethereum-icon"
            />
          </div>
        </div>
      </div>
    </StyleSideBar>
  );
};
