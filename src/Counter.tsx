import React from 'react'; // reactの読み込み

// React.FunctionComponentはReact.FCと省略可能
const Counter: React.FC<{}> = () => {
  const value = 0;
  
  return (
    <div>
      <div> value: {value}</div>
      <button>+1</button>
      <button>-1</button>
    </div>
  );
    
};

export default Counter; // Counterの出力