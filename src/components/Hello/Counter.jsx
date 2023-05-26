import React from "react";
import styled from "styled-components";
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 40px;
  border-radius: 20px;
`;
const Button = styled.button``;
const H1 = styled.text`
  font-family: Arial, Helvetica, sans-serif;
  .sp {
    background-color: ${(props) => (props.count > 5 ? "#BF4F74" : "white")};
  }
`;
export class Counter extends React.Component {
    
  //   shouldComponentUpdate(nextState) {
  //     if (nextState.count > 3) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Loading");
    this.getListPost();
  }
  getListPost = async () => {
    return await setTimeout(() => {
      console.log("This will run after 4 second!");
    }, 4000);
  };
  OnDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  Increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("ok");
    return (
      <div>
        <Wrapper>
          <Title>Hello World!</Title>
        </Wrapper>
        <div>
          <Button onClick={() => this.OnDecrease()}>-</Button>
          <H1 count={this.state.count}>
            <span className="sp">Count:</span> {this.state.count}
          </H1>
          <Button onClick={() => this.Increase()}>+</Button>
        </div>
      </div>
    );
  }
}
