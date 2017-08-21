import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, CardSection } from './common';

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
    fontSize: 15,
    paddingLeft: 15
  }
});

export default ListItem;
