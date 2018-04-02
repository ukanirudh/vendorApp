import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';

class Notifications extends Component {
  toastId = null;
  componentWillMount() {}

  componentWillReceiveProps(nextProps) {
    const {msg, clearNotificationsMesaage} = nextProps
    if (msg && !toast.isActive(this.toastId)) {
      this.toastId = toast(msg, { autoClose: false })
      clearNotificationsMesaage()
    }
  }

  render() {
    return (
      <div className="App">
        <ToastContainer />
      </div>
    );
  }
}

export default Notifications;
