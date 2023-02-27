import "./works.scss"

const WorksCard = ({ img, title }) => {
  return (
    <div className="box">
      <img src={img} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          modi fugiat sunt soluta aspernatur placeat!
        </p>
      </div>
    </div>
  )
}

export default WorksCard
