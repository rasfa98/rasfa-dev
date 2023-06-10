import { PropsWithChildren } from "react";

const Heading = ({ children }: PropsWithChildren) => {
  return <h1 className="text-4xl sm:text-6xl font-bold">{children}</h1>;
};

export default Heading;
