import { createContext, useState } from "react";

interface DashboardContextProps {
    isMobileSidebar : boolean,
    setIsMobileSidebar : (value:boolean) => void
}

let initDashboard = {
    isMobileSidebar: false,
    setIsMobileSidebar: () => {}
}

export const DashboardContext = createContext<DashboardContextProps>(initDashboard);

export const DashboardContextProvider = ({children}:{children:React.ReactNode}) => {
        const [isMobileSidebar , setIsMobileSidebar] = useState(false)
        return (
            <DashboardContext.Provider value={{isMobileSidebar,setIsMobileSidebar}} >
                {children}
            </DashboardContext.Provider>
        )
}