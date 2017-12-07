import React from 'react';
import PropTypes from 'prop-types';
import confirmable from './confirmable';
import Dialog from 'react-bootstrap';
import {
  Modal,
  Button
}
from 'react-bootstrap';

class DialogBox extends React.Component {
  render() {
    const {
      confirmation,
      show,
      proceed,
      dismiss,
      cancel,
    } = this.props;
    return (
      <div className="static-modal">
        <Modal show={show} onHide={dismiss} >
          <Modal.Header>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {confirmation}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={cancel}>NO</Button>
            <Button className='button-l' bsStyle="primary" onClick={proceed}>YES</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

DialogBox.propTypes = {
  show: PropTypes.bool,
  proceed: PropTypes.func,
  cancel: PropTypes.func,
  dismiss: PropTypes.func,
  confirmation: PropTypes.string,
  options: PropTypes.object
}

export default confirmable(DialogBox);