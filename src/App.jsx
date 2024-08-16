import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'



function App() {

  return (
    <>
      <Button />
      <Button text='Dont click me' /> 
      <Button />
    </>
  );
}

export default App;