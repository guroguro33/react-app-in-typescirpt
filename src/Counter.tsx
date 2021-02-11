import React, {useEffect, useRef, useState} from 'react'; // reactとuseStateの読み込み

// React.FunctionComponentはReact.FCと省略可能
const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  }

  const decrement = () => {
    setValue((prevState) => prevState - 1);
  }

  // useRefで初期値を設定
  const renderTimes = useRef<number>(0);

  // renderされるたびに実行
  useEffect(() => {
    renderTimes.current += 1;
  })
  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    // const current = ref.current;
    // if (current != null) current.focus();

    // オプショナルチェインを使った場合
    // ref.current?.focus();

    ref.current.focus();
  }

  return (
    <div>
      <div> value: {value}</div>
      <button onClick={ increment }>+1</button>
      <button onClick={ decrement }>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text"/>
      <button onClick={focusInput}>Click Me!</button>
    </div>
  );
    
};

export default Counter; // Counterの出力