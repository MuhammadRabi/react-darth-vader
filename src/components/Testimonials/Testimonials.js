import TestimonialCard from "./TestimonialCard"
import "./testimonials.scss"
import data from "./TestimonialsData"

const Testimonials = () => {
  return (
    <section id="testimonial" className="testimonial">
      <h2 className="section-title">testimonials</h2>
      <div className="container">
        {data.map((person) => {
          return <TestimonialCard key={person.id} {...person} />
        })}
      </div>
    </section>
  )
}

export default Testimonials
