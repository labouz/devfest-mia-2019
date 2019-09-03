import styled from 'styled-components'
import Layout from "../components/Layout";
import PersonList from "../components/Person/PersonList";
import AnchorButton from "../components/elements/AnchorButton";
import Section from "../components/elements/Section";
import SponsorList from "../components/SponsorList";
import GDGLogo from '../components/icons/gdg_logo.svg'
import Footer from '../components/Footer';
import Anchor from '../components/elements/Anchor';
import Schedule from '../components/Schedule';
import Keynote from '../components/Keynote';
import Tito from '../components/Tito';
const speakers = require('../data/speakers.yml.json')
const keynote = require('../data/kn.yml.json')
const schedule = require('../data/schedule.yml.json')
const organizers = require('../data/organizers.yml.json')
const sponsors = require('../data/sponsors.yml.json')

const Title = styled.h1`
  font-family: 'Product Sans', sans-serif;
  margin-left: 20px;
  text-align: center;
  &#title {
    font-size: 3em;
  }
`

// Offset scroll position due to navbar positioning
const OffsetHeading = styled.h1`
  margin-top: -90px;
  padding-top: 90px;
`

export default () => (
  <Layout>
    <Section skyline>
      <Title id="title"><GDGLogo alt="GDG" width="120px" style={{ position: 'relative', top: '11px' }} /> DevFest Miami 2019</Title>
    </Section>

    <Section color="green">
      <h1>September 28, 2019</h1>
      <p>DevFest Miami is a single-day, single-track, inclusive conference for all developers. GDG Cloud Miami, GDG Miami, and Women Techmakers Miami invite you to join us on Saturday, September 28, 2019 for our annual DevFest at the Wix.com offices in South Beach!</p>
      <p className="cta">
        <AnchorButton color='white/green' href="https://www.eventbrite.com/e/devfest-miami-2019-tickets-68635601933?aff=ehomesaved" target="_blank" rel="noopener noreferrer">Register now</AnchorButton>
      </p>
    </Section>

    <Section>
      <OffsetHeading id="keynote">Keynotes</OffsetHeading>
      <Keynote {...keynote[0]} />
      <br></br>
      <Keynote {...keynote[1]} />
    </Section >
    

    <Section>
      <OffsetHeading id="speakers">Speakers</OffsetHeading>
      <PersonList people={speakers} rainbow />
    </Section>

    <Section color="blue">
      <OffsetHeading id="schedule">Schedule</OffsetHeading>
      <Schedule schedule={schedule} />
    </Section >

    <Section>
      <OffsetHeading id="sponsors">Sponsors</OffsetHeading>
      <p>We would like to thank the following entities for their generous sponsorship and continued support!</p> 
      <SponsorList sponsors={sponsors} />
      <p>Interested in becoming a sponsor? Contact us today:</p>
      <p className="cta">
        <AnchorButton href="mailto:layla.bzb@gmail.com" target="_blank" rel="noopener noreferrer">Become a sponsor</AnchorButton>
      </p>
    </Section>

    <Section color='red'>
      <OffsetHeading id="organizers">Organizers</OffsetHeading>
      <PersonList people={organizers} />
    </Section >

    <Footer />
  </Layout>
)
