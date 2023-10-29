import { FC, ReactNode } from "react";
import Navbar from "./navbar/Navbar";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="h-full w-full">
            <Navbar />
            <div className="h-full w-full flex justify-center items-center">
                {children}
            </div>
        </div>
    );
};

export default Layout;
