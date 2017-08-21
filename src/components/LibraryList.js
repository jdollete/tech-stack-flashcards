import React from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet } from 'react-native';

class LibraryList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
