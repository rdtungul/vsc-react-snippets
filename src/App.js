import { useCallback } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div>
      <div className="is-blue">
        <HelloWorld message="howdy world!" />
      </div>
    </div>
  );
}

export default App;


function Alert({message, color}) {
  const handleChange = useCallback(e => {
    
  },[])
  return <div className={`is-alert ${color}`}>{message}</div>;
}