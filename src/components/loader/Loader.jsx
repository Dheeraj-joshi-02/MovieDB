import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader2 className="animate-spin w-12 h-12 text-blue-500" />
    </div>
  );
};

export default Loader;
