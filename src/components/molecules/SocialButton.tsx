interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}