import React from 'react'

const confirmable = (Component) => class extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
    }
  }
  dismiss() {
    this.setState({
      show: false,
    }, () => {
      this.props.dispose();
    });
  }
  cancel(value) {
    this.setState({
      show: false,
    }, () => {
      this.props.reject(value);
    });
  }
  proceed(value) {
    this.setState({
      show: false,
    }, () => {
      this.props.resolve(value);
    });
  }
  render() {
    return <Component proceed={this.proceed.bind(this)} cancel={this.cancel.bind(this)} dismiss={this.dismiss.bind(this)} show={this.state.show} {...this.props} />
  }
}

export default confirmable;