import React from 'react'
import { connect } from "react-redux";
import styled from 'styled-components'
import { Container } from "../theme";

const StyledContainer = styled(Container)`
  border-radius: 2px;
  overflow: hidden;
  background: #fff;
`

function ImageBox({ exerciseImage }){

  return (
    <StyledContainer className='mt-s'>
      {
        exerciseImage && exerciseImage !== '404' && (
          <img src={exerciseImage} alt="Example of excercise"/>
        )
      }
    </StyledContainer>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return { exerciseImage: state.exerciseImage }
}

export default connect(mapStateToProps)(ImageBox)