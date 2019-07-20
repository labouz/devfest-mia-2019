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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3533496270916!2d-80.14088834900942!3d25.79191431356278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b486f336a93f%3A0x2585d1955721aa04!2sWix.com!5e0!3m2!1sen!2sus!4v1563592781362!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </MapContainer>
)
