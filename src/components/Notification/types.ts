type NotificationMessage = {
  id: number;
  message: string;
};

export type NotificationState = {
  notifications: NotificationMessage | null;
};

export type NotificationProps = object;
