// import ShowButton from './showButton';
import Tasks from './tasks';
// import Target from './target';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <ShowButton/> */}
      {/* <Target/> */}
      <PersonDetails isLogin="true" userName="Omar"/>
      <PersonDetails isLogin="false" userName="Omar"/>
      <Tasks/>
    </div>
  );
}

export default App;


function PersonDetails(props) {
  if(props.isLogin === "true") {
    return (
      <div>
        <h1> Login Success</h1>
        <p>Welcome {props.userName}</p>
      </div>
    );
  }else {
    return <div>Login failed</div>
  }
}


