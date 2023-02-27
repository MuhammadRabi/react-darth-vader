const ServiceBox = ({ icon, title }) => {
  return (
    <div className="box">
      <i className={icon}></i>
      <div className="icon-title">
        <h3>{title}</h3>
      </div>
      <div className="info">
        <a href="#Pricing">details</a>
      </div>
    </div>
  )
}

export default ServiceBox
