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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.353349624585!2d-80.14088298558922!3d25.79191431364551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b486f336a93f%3A0x2585d1955721aa04!2sWix.com!5e0!3m2!1sen!2sus!4v1565120849544!5m2!1sen!2sus" frameborder="0" style= {{border: 0}} allowfullscreen title = "Google Maps Wix.com Offices"></iframe>
  </MapContainer>
)
