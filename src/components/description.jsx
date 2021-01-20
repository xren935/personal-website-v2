import React from "react";

class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <div className="container">
          <div class="row">
            <div class="col-lg-9">
              <h1>A little bit about me</h1>
              <hr />
              <p>
                My name is Xingya Ren, and I usually go by the name Annie, due
                to the fact that my first name is too hard to be pronunced 😂🙈.
                (It's "Hsing-yah", btw.)
                <br />
                I'm currently studying software engineering at McGill University
                and will graduate next year in May. While being interested in
                both sciences and liberal arts, I find programming to be an
                excellent balance between creative freedom and realistic limits.
                According to
                <a href="https://www.16personalities.com/"> 16Personalities</a>,
                I am 44% extraverted and 56% introverted. Just wanted to include
                this to make my self-introduction a bit analytical :)
              </p>
            </div>
            <div class="col-lg-3">
              <div className="img-vancouver" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
            <div className="sub-title" id="sub-title">
                <h2 style={{color: "azure"}}>p.s. I've hidden some more interests/hobbies here 👇</h2>
                <a style={{fontSize: "40px"}}> 👀 </a>
              <ul class="badges">
                <span>
                  <span class="badge badge-primary">Computational Linguistics</span>
                  <span class="badge badge-secondary">RockClimbing</span>
                  <span class="badge badge-success">NerdyJokes</span>
                  <span class="badge badge-info">RollerCoasters</span>
                  <span class="badge badge-dark">Fitness</span>
                  <span class="badge badge-warning">Astrophysics</span>
                  <span class="badge badge-secondary">Travelling</span>
                  <span class="badge badge-primary">Painting</span>
                  <span class="badge badge-info">Piano</span>
                  <span class="badge badge-dark">Photography</span>
                  <span class="badge badge-warning">MachineLearning</span>
                  <span class="badge badge-dark">Languages</span>
                  <span class="badge badge-secondary">Hiking</span>
                  <span class="badge badge-info">Swimming</span>
                  <span class="badge badge-success">Baking</span>
                  <span class="badge badge-info">WebDevelopment</span>
                  <span class="badge badge-primary">Reading</span>
                  <span class="badge badge-secondary">Mechanics</span>
                  <span class="badge badge-success">日本語</span>
                  <span class="badge badge-info">Disney</span>
                  <span class="badge badge-warning">Food</span>
                  <span class="badge badge-success">한국말</span>
                  <span class="badge badge-info">React</span>
                  <span class="badge badge-secondary">McGillUniversity</span>
                  <span class="badge badge-success">History</span>
                  <span class="badge badge-info">Rubik'sCube</span>
                  <span class="badge badge-dark">Photography</span>
                  <span class="badge badge-warning">Volunteering</span>
                  <span class="badge badge-secondary">Fencing</span>
                  <span class="badge badge-primary">Programming</span>
                </span>
              </ul>
              </div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default Description;
