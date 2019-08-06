import Layout from "../components/Layout";
import PageTitle from "../components/elements/PageTitle";
import Section from "../components/elements/Section";
import Footer from "../components/Footer"

export default () => (
  <Layout>
    <Section>
      <PageTitle>Tentative Agenda</PageTitle>
      <ul>
      <li>9:00 - 10:00 am: Registration and Breakfast</li>
      <br></br>
      <li>10:00 - 10:15 am: Introduction</li>
      <br></br>
      <li>10:15 - 11:00 am: Keynote 1 (TBA)</li>
      <br></br>
      <li>11:15 - 12:00 pm: Keynote 2 (TBA)</li>
      <br></br>
      <li>12:15 - 12:45 pm: Lunch</li>
      <br></br>
      <li>1:00 - 3:00 pm: Track Talks</li>
      <br></br>
        <ul>
            <li>A: GCP </li>
            <li>B: Data Science </li>
            <li>C: Web/App Dev </li>
            <li>D: IoT </li>
        </ul>
      <br></br>
      <li>3:15 - 3:30 pm: Raffle!</li>
      <br></br>
      <li>3:45 - 5:00 pm: Workshops</li>
      <br></br>
      <li>5:00 - 6:00 pm: Network and Happy Hour!</li>
      </ul>
    </Section>

    <Footer />
  </Layout>
)
