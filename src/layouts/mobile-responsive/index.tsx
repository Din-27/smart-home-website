import React from "react";

export function MobileWrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full border border-gray-200">{children}</div>
    </div>
  );
}
