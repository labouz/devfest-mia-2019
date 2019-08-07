import styled, { css } from 'styled-components'
import SkylineSvg from './mia5.svg'
import theme from '../theme'

const SectionContainer = styled.section`
  ${props => props.color === 'blue' && css`
    background-color: ${theme.colors.blue};
    color: white;
  `}

  ${props => props.color === 'red' && css`
    background-color: ${theme.colors.red};
    color: white;
  `}

  ${props => props.color === 'green' && css`
    background-color: ${theme.colors.green};
    color: white;
  `}

  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const InnerSection =  styled.div`
  max-width: 1100px;
  margin: 4em 0;
  width: 100%;
  h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  p.cta { margin-top: 40px; }
`

const Section = ({skyline, children, color}) => {
  if (skyline ) {
    return (
      <SectionContainer>
        <InnerSection>{children}</InnerSection>
        <SkylineSvg style={{maxWidth:"1100px"}} />
      </SectionContainer>
    )
  }

  return (
    <SectionContainer color={color}>
      <InnerSection>{children}</InnerSection>
    </SectionContainer>)
}

export default Section
