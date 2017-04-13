import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Image = styled.img`
  position: absolute;
  left: 40%;
  width: 60%;
  top: 2.75em;
  z-index: -1;
`
const LeftBox = styled.div`
  display: flex;
  justify-content: center;
`

const RightBox = styled.div`
  width: 630px;
  position: relative;
  padding: 0 30px;
`

const Quote = styled.p`
  width: 40%;
`

const H1 = styled.h1`
  font-size: 5em;
`

export default class MainPage extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <LeftBox>
          <h1>01</h1>
        </LeftBox>
        <RightBox>
          <h1>School yourself</h1>
          <Quote>You have to be curious about the world in which you live. Look things up. Chase down every reference. Go deeper than anybody else - that’s how you’ll get ahead.</Quote>
          <Image src={require("./StreetPainter-thumbnail.png")} />
        </RightBox>
      </Container>
    );
  }
}
