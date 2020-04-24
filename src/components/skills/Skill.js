import React from 'react';
import 'devicon';

const Capability = ({ heading, description, iconClass }) =>
  <section>
    
    <span className="devicon-java-plain"></i>
    <h3>{heading}</h3>
    <p>{description}</p>
  </section>

export default Capability;

//<span className={`icon major ${iconClass}`} />