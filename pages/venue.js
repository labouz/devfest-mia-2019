import VenueMap from "../components/VenueMap";
import Layout from "../components/Layout";
import PageTitle from "../components/elements/PageTitle";
import Section from "../components/elements/Section";
import Footer from "../components/Footer"

export default () => (
  <Layout>
    <Section>
      <PageTitle>Venue</PageTitle>
      <p>TBA</p>
      <h2>Travel &amp; Parking</h2>
      <p>TBA</p>
      <VenueMap />
    </Section>

    <Footer />
  </Layout>
)
