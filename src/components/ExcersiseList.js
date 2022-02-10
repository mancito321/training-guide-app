import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import {ImageSearch} from '@styled-icons/fluentui-system-regular';
import { Container } from "../theme";
import { selectExercise } from "../actions";

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 76% 8% 8% 8%;
  grid-auto-flow: column;
  padding-left: 4px;
  padding-right: 4px;
  &.element-top{
    padding-bottom: 15px;
    padding-top: 15px;
    justify-content: center;
    background-color: #e9e7e5;
  }
  @media (max-width: ${props => props.theme.screen.screenSize.breakpoints.tablet}) { 
    grid-template-columns: 70% 10% 10% 10%;
  }
`
const RowItem = styled.div`
  min-width: 18px;
  margin: auto 0;
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