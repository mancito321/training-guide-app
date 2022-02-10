import React from 'react'
import { connect } from "react-redux";
import styled from 'styled-components'
import { Container } from "../theme"; 
import { selectDay } from "../actions";

const StyledContainer = styled.div`
  display: flex;
`
const StyledItem = styled.div`
  margin: 10px;
  border-right: solid;
  &:hover{
    cursor:pointer;
  }
  &.active{
    border-bottom: solid;
  }
`

function DayPicker({ dayLists, activeDay, selectDay }){

  return (
    <React.Fragment>
      <Container>
        <StyledContainer>
          {
            dayLists.map(day => (
              <StyledItem className={activeDay === day.id ? 'active' : ''} key={`${day.id}-key`} onClick={() => selectDay(day.id)} >
                {day.name}
              </StyledItem>
            ))
          }
        </StyledContainer>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return { dayLists: state.days, activeDay: state.activeDay }
}

export default connect(mapStateToProps, { selectDay })(DayPicker)