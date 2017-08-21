import React from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  renderDescription() {
    const { library, selectedLibraryId } = this.props;

    if (library.id === selectedLibraryId) {
      return (
        <Text>{library.description}</Text>
      );
    }
  }

  render() {
    const { id, title, description } = this.props.library;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection >
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);
