import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routeConfig from '../../config/router.config';
import BaseLayout from '@/layout/BaseLayout';
import LoginLayout from '@/layout/LoginLayout'
import LoadingTemp from '@/components/Loading';
import NoFind from '@/components/NoFind';

class AuthorizedRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      linkArr: []
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.createLink()
    }, 3e3)
  }

  createLink = () => {
      const linkArr = [];
      const createRoute = ({component: Component, path, ...rest}) => {
        return (<Route path={path} component={Component} {...rest} />)
      }
      routeConfig.forEach((item, index) => {
        const ts = require(`../page/${item.component}/index`);
        linkArr.push(createRoute({
          ...item,
          key: index,
          component: ts.default
        }))
      })
      this.setState({
        linkArr: linkArr.concat((<Route key={linkArr.length} component={NoFind} />))
      })
  }

  render() {
    const { linkArr } = this.state;
    let Layout = '';
    if(window.location.pathname.indexOf('login')) {
      Layout = LoginLayout;
    } else {
      Layout = BaseLayout;
    }
    return (
      <Layout>
        <Switch>
          {linkArr.length?linkArr: <LoadingTemp />}
        </Switch>
      </ Layout>
    )
  }
}

export default AuthorizedRoute;
