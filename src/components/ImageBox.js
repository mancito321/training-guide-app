import React from 'react'
import { connect } from "react-redux";
import styled from 'styled-components'
import { Container } from "../theme";

function ImageBox({ exerciseImage }){

  return (
    <React.Fragment>
      {
        exerciseImage && exerciseImage !== '404' && (
          <img src={exerciseImage} alt="Example of excercise"/>
        )
      }
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return { exerciseImage: state.exerciseImage }
}

export default connect(mapStateToProps)(ImageBox)