// import logo from './logo.svg';
// import ReactDOM from 'react-dom/client';
import './App.css';
import  { useState } from 'react';
import { Data } from './data';


function App() {
  const [data, setData] = useState('')
console.log('HELLO')
  return (
    <div className="App">
      <h1>serch bar</h1>
      <input value={data} onChange={(e) => setData(e.target.value)}></input>
      {Data.filter(post => {
        if (data === '') {
          return post;
        } else if (post.first_name.toLowerCase().includes(data.toLowerCase())) {
          return post;
        }
      }).map((post) => (  
        <p key={post.id}>{post.first_name}</p>
      ))}
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)
export default App;
