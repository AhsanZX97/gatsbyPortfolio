import React from 'react';

import java_project from '../../images/java_project.png';
import php_project from '../../images/php_project.png';
import ruby_project from '../../images/ruby_project.png';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: java_project,
      heading: 'Football League Management',
      description: 'Created a football league generator in my 3nd year of University in a team. Purpose was for users to create their own sunday league football using CRUD. Created using Spring Framework with javascript using google maps API.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: php_project,
      heading: 'Meta Interpetive Learning Web-Interface',
      description: 'Made a web application that performs Meta-Interpretive Learning and neural network algorithm. Created using HTML,CSS,PHP,Javascript and SQL',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: ruby_project,
      heading: 'Football League Management on Ruby',
      description: 'Created a football league generator in my 2nd year of University. Purpose was for users to create their own sunday league football using CRUD. Created using Ruby On Rails, jquery and sql.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="one" className="wrapper style2 spotlights">
       {features.map(feature => <Feature key={feature.heading} {...feature} />)}
    </section>
  );
}

export default Features;
