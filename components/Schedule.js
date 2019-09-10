import styled from 'styled-components'
import Link from 'next/link'
import theme from './theme';

const Article = styled.article`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 8px;
  margin-bottom: 16px;
  a { color: white; }
  a:hover{ color: ${theme.colors.lightGrey}; }
`

const Time = styled.p`
  font-size: 1.1em;
  margin: 16px 0 0 0;
`

const Heading = styled.h3`
  font-size: 1.2em;
  margin: 40px 0 0 0;
`

const Title = styled.h3`
  font-size: 1.3em;
  margin: 16px 0 0 0;
`

const SubTitle = styled.h4`
  font-size: 1.1em;
  opacity: 0.9;
  margin: 16px 0 0 0;
`

const Speaker = styled.h4`
  font-size: 1.1em;
  font-style: italic;
  font-weight: 400;
  opacity: 0.7;
  margin: 8px 0 0 0;
`

const SpeakerLink = styled.a`
  color: white;
  text-decoration: none;
  &hover {
    color: ${theme.colors.lightGrey};
  }
`

const Talk = ({date, title, speaker, speakerId, description}) => {
  return (
    <Article>
      <Time>{date}</Time>
      <div>
        <SubTitle>{title}</SubTitle>
        {!!speaker && <Link passHref href={`/#${speakerId}`}>
          <SpeakerLink>
            <Speaker>{speaker}</Speaker>
          </SpeakerLink>
        </Link>}
        {!!description && <p>{description}</p>}
      </div>
    </Article>
  )
}

const Track = ({name, talks}) => {
  const talkItems = talks != null ? talks.map(talk => {
    return <Talk {...talk} key={talk.id}/>
  }) : <div></div>

  return (
    <div>
      <Heading>{name}</Heading>
      {talkItems}
    </div>
  )
}

const Event = ({title, date, speaker, speakerId, description, tracks, htmlDescription}) => {
  const trackItems = tracks != null ? tracks.map(track => {
    return <Track {...track} key={track.id}/>
  }) : <div></div>

  return (
    <Article>
      <Time>{date}</Time>
      <div>
        <Title>{title}</Title>
        {!!speaker && <Link passHref href={`/#${speakerId}`}>
          <SpeakerLink>
            <Speaker>{speaker}</Speaker>
          </SpeakerLink>
        </Link>}
        {!!description && <p>{description}</p>}
        {trackItems}
        {!!htmlDescription && <p dangerouslySetInnerHTML={{__html: htmlDescription}}></p>}
      </div>
    </Article>
  )
}

const Schedule = ({schedule}) => {
  const scheduleItems = schedule.map(event => (
    <Event {...event} key={event.id}/>
  ))

  return (
    <div>
      {scheduleItems}
    </div>
  )
}

export default Schedule
