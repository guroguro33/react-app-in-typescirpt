import React from 'react';

interface AppProps {
  message?: string;
}

// 関数の変数にアノテーションをつける（引数に型アノテーションはつけなくていい）
const App: React.FunctionComponent<AppProps> = ({message}: AppProps) => {
  return <div>{message}</div>;
};

// デフォ値
App.defaultProps = {
  message: 'Hello, defaultProps!',
};

export default App;
