import VenueMap from "../components/VenueMap";
import Layout from "../components/Layout";
import PageTitle from "../components/elements/PageTitle";
import Section from "../components/elements/Section";
import Footer from "../components/Footer"

export default () => (
  <Layout>
    <Section>
      <PageTitle>Venue</PageTitle>
      <p>Wix.com Offices</p>
      <h2>Travel &amp; Parking</h2>
      <ul>
        <li>Miami Beach Parking Garage on 17th Street: 640 17th St, Miami Beach, FL 33139</li>
        <li>Lincoln Garage: 1691 Michigan Ave #206, Miami Beach, FL 33139</li>
      </ul>
      <br></br>
      <VenueMap />
    </Section>

    <Footer />
  </Layout>
)
