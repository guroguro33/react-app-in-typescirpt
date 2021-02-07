import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}

// FunctionComponents
// 関数の変数にアノテーションをつける（引数に型アノテーションはつけなくていい）
const App: React.FunctionComponent<AppProps> = ({message}: AppProps) => {
  return (
    <div>
      <Counter />
    </div>
  )
};

// デフォ値
App.defaultProps = {
  message: 'Hello, defaultProps!',
};

export default App;
