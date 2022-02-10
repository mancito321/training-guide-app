import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import {ImageSearch} from '@styled-icons/fluentui-system-regular'
import { Container } from "../theme";
import { selectExercise } from "../actions";
import { screenSize } from "../theme"

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 85% 5% 5% 5%;
  grid-auto-flow: column;
  @media (max-width: ${screenSize.breakpoints.tablet}) { 
    grid-template-columns: 70% 10% 10% 10%;
  }
`
const RowItem = styled.div`
  min-width: 18px;
  &.item-a {
    grid-column: 1 / span 1;
  }
  .search-icon:hover{
    cursor:pointer;
  }
`
function ExerciseList(props) {
  const { excercises, selectExercise } = props
  return (
    <React.Fragment>
      <Container>
        <StyledContainer>
          <RowItem className="item-a">
            Excersise
          </RowItem>
          <RowItem>
            Sets
          </RowItem>
          <RowItem>
            Rep
          </RowItem>
          <RowItem>
          </RowItem>
        </StyledContainer>
        {excercises.map(excersise => {
          return (
            <StyledContainer key={excersise.metaName + excersise.reps}>
              <RowItem className="main-item">
                {excersise.name}
              </RowItem>
              <RowItem>
                {excersise.sets}
              </RowItem>
              <RowItem>
                {excersise.reps}
              </RowItem>
              <RowItem>
                <ImageSearch className="search-icon" onClick={() => selectExercise(excersise.metaName)}/>
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
  return { excercises: state.exercises }
}

export default connect(mapStateToProps, { selectExercise })(ExerciseList)