import React, { Component } from "react";
import { Link as RRLink } from "react-router-dom";

class Link extends Component {
  render() {
    const { to, onClick, target, rel, children, className } = this.props;
    return (
      <RRLink
        to={to}
        className={className}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </RRLink>
    );
  }
}

export default Link;
