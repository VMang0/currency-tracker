import React, { Component } from 'react';

import { NotificationContainer, NotificationWrapper } from '@components/Notification/styled';
import { NotificationProps, NotificationState } from '@components/Notification/types';
import notificationService from '@services/notification';

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
      <NotificationContainer>
        {notifications && <NotificationWrapper key={notifications.id}>{notifications.message}</NotificationWrapper>}
      </NotificationContainer>
    );
  }
}

export default Notification;
