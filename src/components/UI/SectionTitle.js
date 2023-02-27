import styled from "styled-components"

const SectionTitle = ({ title }) => {
  return <Title>{title}</Title>
}
export default SectionTitle

const Title = styled.h2`
  border: 2px solid #000;
  width: fit-content;
  margin: 5px auto 75px;
  border-radius: 2px;
  color: #000;
  padding: 10px 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
`
