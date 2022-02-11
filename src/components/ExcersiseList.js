import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import {ImageSearch} from '@styled-icons/fluentui-system-regular';
import { Container } from "../theme";
import { selectExercise } from "../actions";

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 80% 10% 10%;
  grid-auto-flow: column;
  padding: 10px 5px;
  &.element-top{
    padding-bottom: 15px;
    padding-top: 15px;
    justify-content: center;
    background-color: #e9e7e5;
  }
  &.element-content{
    &:hover{
      cursor:pointer;
      background-color: #efeeed;
    }
  }
  &.element-active {
    background-color: #dfdddc1c;
    color: #0066ccb0;
  }
  @media (max-width: ${props => props.theme.screen.screenSize.breakpoints.tablet}) { 
    grid-template-columns: 60% 20% 20%;
  }
`
const RowItem = styled.div`
  min-width: 18px;
  margin: auto 0;
  &.item-a {
    grid-column: 1 / span 1;
  }
`
function ExerciseList(props) {
  const { excercises, activeExercise, selectExercise } = props
  return (
    <React.Fragment>
      <Container className="mt-l">
        <StyledContainer className="element-top">
          <RowItem className="item-a">
            Excersise
          </RowItem>
          <RowItem>
            Sets
          </RowItem>
          <RowItem>
            Rep
          </RowItem>
        </StyledContainer>
        {excercises.map(excersise => {
          return (
            <StyledContainer className={`element-content ${activeExercise === excersise.metaName ? 'element-active' : ''}`} key={excersise.metaName + excersise.reps} onClick={() => selectExercise(excersise.metaName)}>
              <RowItem className="main-item">
                {excersise.name}
              </RowItem>
              <RowItem>
                {excersise.sets}
              </RowItem>
              <RowItem>
                {excersise.reps}
              </RowItem>
            </StyledContainer>
          )
        })}
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return { excercises: state.exercises, activeExercise: state.activeExercise }
}

export default connect(mapStateToProps, { selectExercise })(ExerciseList)