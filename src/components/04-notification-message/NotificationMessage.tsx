interface NotificationMessageProps {
  type: 'success' | 'error' | 'warning';
  message: string;
}

const NotificationMessage = ({ type, message }: NotificationMessageProps) => {
  return (
    <div role='alert' className={type}>
      {message}
    </div>
  );
};

export default NotificationMessage;
