import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Square as _Square } from '../../components'


const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-bottom: 200px;
`
const Image = styled.img`
  width: 100%;
  margin-top: 2.75em;
  z-index: -1;
`
const RightSide = styled.div`
  position: absolute;
  left: 40%;
  width: 60%;
  top: 0;
  overflow-x: hidden;
`

const RightSideForSquare = styled(RightSide)`
  overflow-x: initial;
  z-index: 2;
  top: 2.5em;
`

const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`

const RightBox = styled.div`
  width: 630px;
  position: relative;
  padding-left: 30px;
`

const Quote = styled.p`
  width: 37%;
`

const H1 = styled.h1`
  font-size: 5em;
`

const RightsideH1 = styled(H1)`
  color: rgb(241,228,117);
  position: absolute;
  margin-left: -60%;
`

export default class MainPage extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <LeftBox>
          <H1>01</H1>
        </LeftBox>
        <RightBox>
          <H1>School yourself</H1>
          <Quote>You have to be curious about the world in which you live. Look things up. Chase down every reference. Go deeper than anybody else - that’s how you’ll get ahead.</Quote>
          <RightSideForSquare>
            <_Square></_Square>
          </RightSideForSquare>
          <RightSide>
            <RightsideH1>School yourself</RightsideH1>
            <Image src={require("./StreetPainter-thumbnail.png")} />
          </RightSide>
        </RightBox>
      </Container>
    );
  }
}
