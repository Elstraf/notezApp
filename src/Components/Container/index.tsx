interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[1366px] mx-auto px-9">{children}</div>;
};

export default Container;
