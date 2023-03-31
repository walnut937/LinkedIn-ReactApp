import './App.css';
import React from 'react';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Widgets from './Components/Widgets'
function App() {
  return (
    <>
     {/* {Header} */}
      <Header/>
     {/* {App body} */} 
      <div className='App_body flex flex-col md:flex-row p-5 px-24 gap-5'>
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
    </>
  ); 
}
export default App;