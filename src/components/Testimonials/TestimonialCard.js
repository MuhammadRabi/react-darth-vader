const TestimonialCard = ({ name, title, avatar, desc }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <span className="title">{title}</span>
      <img src={avatar} alt="member" />
      <div className="rate">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      {desc}
    </div>
  )
}

export default TestimonialCard
