import React from "react";
import { Helmet } from "react-helmet-async";

function HeadTitle({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default HeadTitle;
