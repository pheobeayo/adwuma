import { FC, ReactNode, useState } from "react";

import Onboarding from "./onboarding/Onboarding";

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  const [onboarded, setOnboarded] = useState(false);
  return (
    <>
      {!onboarded && (
        <Onboarding onboarded={onboarded} setOnboarded={setOnboarded} />
      )}
      {onboarded && (
        <div className="bg-white">
          <div className=" max-w-7xl mx-auto">{children}</div>
        </div>
      )}
    </>
  );
};

export default Layout;
