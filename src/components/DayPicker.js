import React from 'react'
import { connect } from "react-redux";
import styled from 'styled-components'
import { Container } from "../theme"; 
import { selectDay } from "../actions";

const StyledContainer = styled.div`
  display: flex;
  padding: 10px 0;
`
const StyledItem = styled.div`
  padding: 10px;
  opacity: 0.7;
  &:hover{
    cursor:pointer;
    opacity: 1;
  }
  &.active{
    border-bottom: solid;
  }
`

function DayPicker({ dayLists, activeDay, selectDay }){

  return (
    <React.Fragment>
      <Container className='mt-l'>
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