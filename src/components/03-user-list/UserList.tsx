interface UserListProps {
  id: number;
  name: string;
}

const UserList = ({ users }: { users: UserListProps[] }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
