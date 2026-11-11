interface UserProfileCardProps {
  name: string;
  role?: string;
  avatar?: string;
}

const UserProfileCard = ({
  name,
  role = 'Guest',
  avatar = '/default-avatar.png',
}: UserProfileCardProps) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{role}</p>
      <img src={avatar} alt={`${name}'s avatar`} />
    </>
  );
};

export default UserProfileCard;
