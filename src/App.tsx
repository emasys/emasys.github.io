import * as React from 'react';
import './styles/App.scss';

const App: React.FunctionComponent<{}> = () => {
  return (
    <div className='container'>
      <div className='card'>
        <p>Hi there, this page is currently under construction. </p>
        <p>
          However, you can still connect with me via{' '}
          <a href='https://www.linkedin.com/in/emmanuel-ndukwe/'>LinkedIn</a>
        </p>
      </div>
    </div>
  );
};

export default App;
