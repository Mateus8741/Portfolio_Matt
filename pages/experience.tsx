import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import Projects from "components/designs/Designs";
import React from "react";

function designs() {
  return (
    <Page
      currentPage="Designs"
      meta={{ desc: "Sou desenvolvedor Front-end Web/Mobile e Design." }}
    >
      <Heading />
      <Projects />
    </Page>
  );
}

export default designs;
