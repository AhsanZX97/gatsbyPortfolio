import React from 'react';
import { Link } from 'gatsby';

import SkillsList from './SkillsList';

const Skills = () =>
  <section id="two" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>Skills</h2>
      <div className="features">
        <SkillsList />
      </div>
    </div>
  </section>

export default Skills;
