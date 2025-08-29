import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <React.Fragment>
      <div className="flex h-screen w-full items-center justify-center bg-black">
        <Loader2 className="h-12 w-12 animate-spin text-[#6565cd]" />
      </div>
    </React.Fragment>
  );
};

export default Loader;
