import ProportiesProvider from "./Proporties";

const RootContext = ({ children }) => {
  return <ProportiesProvider>{children}</ProportiesProvider>;
};

export default RootContext;
