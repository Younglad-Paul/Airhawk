type ContainerProps = {
    children: React.ReactNode;
  };
  
  const Container = ({ children }: ContainerProps) => {
    return <div className="max-w-[100rem] mx-auto w-full overflow-hidden  ">{children}</div>;
  };
  export default Container;