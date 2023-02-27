const StatsBox = ({ icon, title, target }) => {
  return (
    <div className="stats-box">
      <i className={icon}></i>
      <span className="count" data-goal={target}>
        0
      </span>
      <span className="name">{title}</span>
    </div>
  )
}

export default StatsBox
