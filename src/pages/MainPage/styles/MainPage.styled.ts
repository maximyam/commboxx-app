import styled from 'styled-components'
import { chromeWhite } from '../../styles/Colours'

export const MainPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ItemCardsDiv = styled.div`
  width: 100%;
  height: 70vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`

export const PostButtonStyled = styled.div`
  margin-top: 2vh;
  width: 78vw;
  height: 8vh;
  background: ${chromeWhite};

  border-radius: 10px;
  border-style: solid;
  border-width: 1.5px;
  box-shadow: 0 1px 2px gray;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PostButtonLabel = styled.em`
  font-size: 1.8rem;
`