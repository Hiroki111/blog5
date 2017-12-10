import React from 'react';
import RichTextEditor from 'react-rte';
import PropTypes from 'prop-types';

class RichTextMarkdown extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string
    }).isRequired
  }

  constructor(props) {
    super(props)
    this.RichTextEditor = RichTextEditor;
    this.state = {
      value: this.props.input.value ?
        this.RichTextEditor.createValueFromString(this.props.input.value, 'html') : this.RichTextEditor.createEmptyValue()
    }
  }

  componentWillReceiveProps(nextProps) {
    const isPristine = nextProps.meta.pristine;
    if (nextProps.input.value && isPristine) {
      this.setState({
        value: this.RichTextEditor.createValueFromString(nextProps.input.value, 'html')
      });
    }
  }

  handleChange = (value) => {
    this.setState({
      value
    });

    this.props.input.onChange(value.toString('html'));
  }

  render() {
    const {
      RichTextEditor,
      state: {
        value
      },
      handleChange
    } = this
    return RichTextEditor ? <RichTextEditor value={value} onChange={handleChange}/> : <div/>
  }
}

export default RichTextMarkdown