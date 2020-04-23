import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Ahsan Zia</h1>
      <p>
        Recently graduated from the University of Surrey in Computer
        Science
        and keen to work and learn more about software development having built a lot of
        software whilst in University. I’m experienced in languages such as Java,
        JavaScript,
        Python and C# while in University and I’m also easily able to pick up new
        technology.
        My current goal is to improve my problem-solving skill by working on projects
        provided
        in a commercial environment.
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              View CV
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
