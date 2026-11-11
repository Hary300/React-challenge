interface ActionButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

const ActionButton = ({ label, onClick, disabled }: ActionButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default ActionButton;
