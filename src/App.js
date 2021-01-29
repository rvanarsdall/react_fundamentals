import './App.css';
import NameProp from './components/NameProp';
import Contact from './components/Contact';
import State from './components/State'

function App() { // root component
  const profile = {name: "Paul", age: "70", school: "EFA", graduationYear: 2019}  // object like one from server that is passed into Contact component prop
  return (

    <div className="App">
     {/* <NameProp name="Paul" />
     <NameProp name="Austin" />
     <NameProp name="Dustie" /> */}
    {/* <Contact name="Paul" age="70" school="EFA" graduationYear="2019" /> */}
    <Contact {...profile} />
    <p>----------------------------</p>
    <State />
    </div>
  );
}

export default App;
