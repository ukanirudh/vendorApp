import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';

class Notifications extends Component {
  toastId = null;
  componentWillMount() {}

  componentWillReceiveProps(nextProps) {
    const {msg, clearNotificationsMesaage, toast_type} = nextProps
    if (msg && !toast.isActive(this.toastId)) {
      this.toastId = toast(msg, { type: toast_type, autoClose: 5000 })
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
