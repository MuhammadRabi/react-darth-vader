import WorksCard from "./WorksCard"
import "./works.scss"

const Works = () => {
  return (
    <section id="works" className="works">
      <h2 className="section-title">works</h2>
      <div className="container">
        <figure>
          <img src={require("../../img/work-02.png")} alt="" />
        </figure>
        <div className="boxes-area">
          <WorksCard
            img={require("../../img/work-01.png")}
            title="Archeticture"
          />
          <WorksCard
            img={require("../../img/work-02.png")}
            title="planning strategy"
          />
          <WorksCard
            img={require("../../img/work-03.png")}
            title="business analysis"
          />
          duck ant malek tap boy girl bobby play
        </div>
      </div>
    </section>
  )
}

export default Works
