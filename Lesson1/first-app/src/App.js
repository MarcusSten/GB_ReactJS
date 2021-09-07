import Message from './Components/Message/Message'
import './style.css'

const myName = <Message name='User' />;

function App() {
  return (
      <div className="container">
        <div className="box">
          <h1>This is a new app!</h1>
          <p>Hello,</p>
          <header className="App">
            <Message name={myName} />
          </header>
        </div>
      </div>
  );
}

export default App;
 