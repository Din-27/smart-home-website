import React from "react";

type IconProps = {
  src: string;
  alt: string;
};

const Icon: React.FC<IconProps> = (props) => {
  return <img className="w-[24px] h-[24px]" {...props} />;
};

export default Icon;
