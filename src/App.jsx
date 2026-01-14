import './App.css'
import { Button, Typography } from '@mui/material'
import Counter from './components/Counter'
import Test, {Test1 as T1, Test2 as T2, Test3, Test4} from './components/Test'
import User from './components/User';

function App() {

  const name = "Hello React";
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
            Welcome to my MUI App! {name}
      </Typography>
          <Counter />
          <User />
          {/* <Test />
          <T1 />
          <T2 />
          <Test3 />
          <Test4 /> */}
    </>
  )
}

export default App
