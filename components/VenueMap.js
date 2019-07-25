import styled from 'styled-components'

const MapContainer = styled.div`
  height: 400px;
  margin: 30px 0;
  max-width: 600px;
  overflow: hidden;
  position: relative;
  width: 100%;

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

export default () => (
  <MapContainer>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.164552374076!2d-80.23367904900967!3d25.765127814665796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b487093a05d9%3A0x9eff32fb2acf9fda!2sTheVenture.city!5e0!3m2!1sen!2sus!4v1564014576708!5m2!1sen!2sus" frameBorder="0" style={{ border: 0 }} allowFullScreen title="The Venture.city"></iframe>
  </MapContainer>
)
