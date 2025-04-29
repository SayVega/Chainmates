interface EthereumProvider {
    isMetaMask?: boolean;
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on?: (event: string, handler: (...args: any[]) => void) => void;
    removeListener?: (event: string, handler: (...args: any[]) => void) => void;
    // Podés agregar más métodos si los vas usando
  }
  
  interface Window {
    ethereum?: EthereumProvider;
  }
  