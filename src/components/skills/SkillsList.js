import React from 'react';

import Skill from './Skill';

const SkillsList = () => {
  const SKILLS = [
    {
      heading: 'Lorem ipsum amet',
      description: 'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      iconClass: 'fa-code',
    },
    {
      heading: 'Morem ipsum amet',
      description: 'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      iconClass: 'fa-lock',
    },
    {
      heading: 'Dorem ipsum amet',
      description: 'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      iconClass: 'fa-cog',
    },
    {
      heading: 'Forem ipsum amet',
      description: 'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      iconClass: 'fa-desktop',
    },
    {
      heading: 'Corem ipsum amet',
      description: 'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      iconClass: 'fa-chain',
    },
    {
      heading: 'Norem ipsum amet',
      description: 'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      iconClass: 'fa-diamond',
    },
  ]

  const [skills] = React.useState(SKILLS);

  return (
    <>
      {skills.map((skill) => <Skill key={skill.heading} {...skill} />)}
    </>
  )
}

export default SkillsList;
