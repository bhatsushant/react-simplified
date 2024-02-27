import { forwardRef } from "react";

const CustomComponent = (props, ref) => {
  return <input {...props} type="text" ref={ref} />;
};

export const CustomInput = forwardRef(CustomComponent);
