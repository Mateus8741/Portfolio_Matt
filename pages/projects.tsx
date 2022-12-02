import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "Aqui estão alguns dos meus projetos favoritos." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default projects;
