import React, { Component } from 'react';

import notificationService from '@services/notification';
import './index.css';

type NotificationMessage = {
  id: number;
  message: string;
};

type NotificationState = {
  notifications: NotificationMessage | null;
};

type NotificationProps = object;

class Notification extends Component<NotificationProps, NotificationState> {
  constructor(props: NotificationProps) {
    super(props);
    this.state = {
      notifications: null,
    };
  }

  componentDidMount() {
    notificationService.subscribe(this.handleNotification);
  }

  componentWillUnmount() {
    notificationService.unsubscribe(this.handleNotification);
  }

  handleNotification = (notification: string, duration: number) => {
    const id = Date.now();
    this.setState({ notifications: { id, message: notification } });

    setTimeout(() => {
      this.removeNotification();
    }, duration);
  };

  removeNotification = () => {
    this.setState({ notifications: null });
  };

  render() {
    const { notifications } = this.state;

    return (
      <div className="notification-container">
        {notifications && (
          <div key={notifications.id} className="notification">
            {notifications.message}
          </div>
        )}
      </div>
    );
  }
}

export default Notification;
