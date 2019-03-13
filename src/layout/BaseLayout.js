import React, { Component } from 'react';

class BaseLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <nav>
        this is nav
        {children}
        this is footer
      </nav>
    )
  }
}

export default BaseLayout;
