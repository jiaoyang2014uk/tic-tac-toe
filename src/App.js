import React from 'react';
import './App.css';
import MyInput from './MyInput';
import MyList from './MyList';
import MyItem from './MyItem';
function App() {
  return (
    <div className="App">
        <MyInput type="text" ph="username"/>
        <MyInput type="password" ph="password"/>
        <MyList>
          <MyItem order="1" value="abc"/>
          <MyItem order="2" value="efg"/>
          <MyInput type="password" ph="password"/>
        </MyList>
    </div>
  );
}

export default App;
