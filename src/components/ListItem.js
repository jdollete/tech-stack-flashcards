import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, description } = this.props.library;
    const { titleStyle } = styles;

    return (
      <CardSection >
        <Text style={titleStyle}>
          {title}
        </Text>
      </CardSection>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default connect(null, actions)(ListItem);
