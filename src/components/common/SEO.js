import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

export default class SEO extends Component {
  static propTypes = {
    lang: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    lang: "en",
    title: "De Sigaar",
    description: "De Sigaar is a Development and Design group",
    author: "De Sigaar",
    meta: []
  };

  render() {
    const { lang, title, description, author, meta } = this.props;

    return (
      <Helmet
        htmlAttributes={{
          lang
        }}
        title={title}
        meta={[
          {
            name: "description",
            content: description
          },
          {
            property: "og:title",
            content: title
          },
          {
            property: "og:description",
            content: description
          },
          {
            property: "og:type",
            content: "website"
          },
          {
            name: "twitter:card",
            content: description
          },
          {
            name: "twitter:creator",
            content: author
          },
          {
            name: "twitter:title",
            content: title
          },
          {
            name: "twitter:description",
            content: description
          }
        ].concat(meta)}
      />
    );
  }
}
