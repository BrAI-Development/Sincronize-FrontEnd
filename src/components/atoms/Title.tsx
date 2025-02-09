interface TitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

export const Title: React.FC<TitleProps> = ({ children, subtitle }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900">{children}</h1>
      {subtitle && (
        <p className="mt-2 text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}