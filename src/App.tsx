import * as React from 'react';
import Card from './Card';
import './styles/App.scss';

const App: React.FunctionComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-4 card-wrapper">
              <Card>contents</Card>
              <Card>second contents</Card>
              <p>Thank you!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
