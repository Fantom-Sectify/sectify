import { useAddress,  useMetamask, useSigner } from "@thirdweb-dev/react";
import { createContext } from "react";

export const SectifyContext = createContext();

export const SectifyProvider = ({ children }) => {
    const connectMetaMask = useMetamask();
    const address = useAddress();
    const signer = useSigner(); 
    

  return <SectifyContext.Provider value={{connectMetaMask, signer,address}}>{children}</SectifyContext.Provider>;
};