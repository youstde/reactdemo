import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../redux/action/user'

const Home = ({ dispatch }) => {
  return (
    <div onClick={e => {
      dispatch(addUser())
    }}>
      this is home
    </div>
  )
}

export default connect()(Home);
