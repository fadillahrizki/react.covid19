import React,{useEffect} from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Faq from './components/pages/Faq'
import Contact from './components/pages/Contact'
import {useDispatch} from 'react-redux'
import {Global,Local} from './redux/actions/Get'

function App() {
  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(Global())
        dispatch(Local())
    },[dispatch])

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
