import {Fragment} from 'react'
import Sponsor from "./Sponsor";
import styled from 'styled-components'

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: auto;
  height: auto;
`

const getSponsorList = (sponsors) => (
  sponsors.map(sponsor => (
    <Sponsor {...sponsor} key={sponsor.id} />
  ))
)

const SponsorList = ({ sponsors }) => (
  <Fragment>
    <List>
      {getSponsorList(sponsors.platinum)}
    </List>
    <List>
      {getSponsorList(sponsors.gold)}
    </List>
    <List>
      {getSponsorList(sponsors.silver)}
    </List>
    <List>
      {getSponsorList(sponsors.bronze)}
    </List>
  </Fragment>
)

export default SponsorList
