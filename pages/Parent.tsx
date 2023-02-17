const Parent: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <p>{title}</p>
      {children}
    </>
  );
};

export default Parent;
