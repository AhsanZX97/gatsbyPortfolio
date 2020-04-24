import React from 'react';

import Layout   from '../components/common/layout';
import Footer   from '../components/common/Footer';
import Sidebar  from '../components/common/Sidebar';

import Introduction from '../components/introduction/Introduction';
import Projects     from '../components/projects/Projects';
import Skills from '../components/skills/Skills';
import Contact      from '../components/contact/Contact';

const IndexPage = () =>
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <Introduction />
      <Projects />
      <Skills />
      <Contact />
    </div>

    <Footer />
  </Layout>

export default IndexPage;