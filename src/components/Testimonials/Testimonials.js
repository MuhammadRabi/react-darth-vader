import TestimonialCard from "./TestimonialCard"
import data from "./TestimonialsData"
import styled from "styled-components"
import SectionTitle from "../UI/SectionTitle"

const Testimonials = () => {
  return (
    <TestimonialWrapper id="testimonial">
      <SectionTitle title="testimonials" />
      <div className="container">
        {data.map((person) => {
          return <TestimonialCard key={person.id} {...person} />
        })}
      </div>
    </TestimonialWrapper>
  )
}

export default Testimonials

const TestimonialWrapper = styled.section`
  background-color: #e6e6e7;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
  }
`
