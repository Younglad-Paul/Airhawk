type ContainerProps = {
    children: React.ReactNode;
}

const MarketBodyCon = ({children}: ContainerProps) => {
    return <div className=" overflow-hidden flex min-h-screen flex-col bg-[#1b1b1b]">{children}</div> 
}

export default MarketBodyCon;