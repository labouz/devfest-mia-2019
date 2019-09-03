import VenueMap from "../components/VenueMap";
import Layout from "../components/Layout";
import PageTitle from "../components/elements/PageTitle";
import Section from "../components/elements/Section";
import Footer from "../components/Footer"
import AnchorButton from "../components/elements/AnchorButton";


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

    <Section color="green">
      <h1>Welcome to Miami!</h1> 
      <p>First time in Miami? Here is a list of 25 things to do while you're here!</p>
      <p className="cta"><AnchorButton color='white/green' href="https://www.timeout.com/miami/things-to-do/best-things-to-do-in-miami" target="_blank" rel="noopener noreferrer">Things to do</AnchorButton></p>
    </Section>

    <Footer />
  </Layout>
)
