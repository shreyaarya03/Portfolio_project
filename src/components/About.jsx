function About({data}) {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <h2 className="section-title">About<span className="gradient-text">Me</span></h2>
          <p className="muted">{data.about}</p>
          <p className="muted">{data.goals}</p>
        </div>

        <div className="card">
          <h3>Interest</h3>
          <div className="badges">
          </div>
          {
            data.interests.map((item)=>(
              <span className = "badge" key ={item}>{item}</span>
              
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default About;
