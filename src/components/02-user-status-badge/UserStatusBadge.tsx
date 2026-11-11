interface UserStatusBadgeProps {
  isOnline: boolean;
}
const UserStatusBadge = ({ isOnline }: UserStatusBadgeProps) => {
  return (
    <div className={isOnline ? 'online' : 'offline'}>
      {isOnline ? 'Online' : 'Offline'}
    </div>
  );
};

export default UserStatusBadge;
