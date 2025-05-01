import { useEffect } from "react";
import { logoutUser } from "../utils/logoutUser";

export function useWalletChanged() {

  useEffect(() => {
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0 || accounts[0] !== localStorage.getItem("walletAddress")) {
        logoutUser();
      }
    };

    if (typeof window !== "undefined" && window.ethereum?.on) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (typeof window !== "undefined" && window.ethereum?.removeListener) {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      }
    };
  });
}
