import React, { useRef, forwardRef } from "react";

// Wrap the component with forwardRef
const FancyInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

function ForwardRefEx() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <FancyInput ref={inputRef} placeholder="Type something fancy..." />
      <button onClick={handleFocus}>Focus FancyInput</button>
    </div>
  );
}

export default ForwardRefEx;
