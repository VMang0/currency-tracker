type NotificationCallback = (notification: string, duration: number) => void;

class NotificationService {
  private subscribers: NotificationCallback[] = [];

  subscribe(callback: NotificationCallback): void {
    this.subscribers.push(callback);
  }

  unsubscribe(callback: NotificationCallback): void {
    this.subscribers = this.subscribers.filter((sub) => sub !== callback);
  }

  notify(notification: string, duration: number = 3000): void {
    this.subscribers.forEach((callback) => callback(notification, duration));
  }
}

export default new NotificationService();
