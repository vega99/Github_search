import React, { createContext, useState } from "react";

interface SidebarContextType {
    open: boolean;
    setOpen: (value: boolean) => void;
}

interface Props {
    children: React.ReactNode;
}

export const SidebarContext = createContext<SidebarContextType>({
    open: false,
    setOpen: (val) => {},
});

const SidebarProvider = (props: Props) => {
    const [open, setOpen] = useState(false);


    return (
        <SidebarContext.Provider value={{ open, setOpen }}>
            {props.children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
