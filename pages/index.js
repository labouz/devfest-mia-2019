import styled from 'styled-components'
import Layout from "../components/Layout";
import PersonList from "../components/Person/PersonList";
import AnchorButton from "../components/elements/AnchorButton";
import Section from "../components/elements/Section";
import SponsorList from "../components/SponsorList";
import GDGLogo from '../components/icons/gdg_logo.svg'
import Footer from '../components/Footer';
import Anchor from '../components/elements/Anchor';
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
      <p>DevFest Miami is a single-day, single-track, inclusive conference for all developers. GDG Cloud Miami and Women Techmakers Miami invite you to join us on Saturday, September 28, 2019 for our annual DevFest at the Wix.com offices in South Beach!</p>
      <p className="cta">
        <AnchorButton color='white/green' href="https://www.meetup.com/GDG-Cloud-Miami/" target="_blank" rel="noopener noreferrer">Register now</AnchorButton>
      </p>
    </Section>

    <Section color="blue">
      <OffsetHeading id="speakers">Speakers &amp; Talks</OffsetHeading>
      <p>We are looking for speakers to deliver innovative talks in web, mobile, UI/UX, cloud, emerging technologies and more. Got a talk idea? We want to hear from you!</p>
      <p className="cta">
        <AnchorButton color="white/blue" href="mailto:layla.bzb@gmail.com" target="_blank" rel="noopener noreferrer">Send us your talk!</AnchorButton>
      </p>
    </Section>

    <Section>
      <OffsetHeading id="sponsors">Sponsors</OffsetHeading>
      <SponsorList sponsors={sponsors} />
      <p>Sponsorship offers marketing exposure, hiring help, and adoration from our community, and can be in-kind (space, drinks, volunteers, swag, etc.) or monetary. Interested in becoming a sponsor? Contact us today:</p>
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
