
import {useRef} from 'react'
import api from '../src/services/api'
import { Container, ContainerInputs, Form, Input, InputLabel, Title, TopBackground } 
from './styles'

import UsersImage from  './assets/users.png'
import {DefaultButton as Button} from './components/Button'


function Home(){
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  async function registerNewUser (){
    const data = await api.post('/usuario',{
      email:inputEmail.current.value,
      age:parseInt(inputAge.current.value),
      name:inputName.current.value
    })

    
    console.log(data)
  }  

 
  return(

      <Container>
        <TopBackground>
          <img src = {UsersImage} alt="imagem-usuarios" />
          </TopBackground>


    <Form>
        
        <Title> Cadastrar Usuário</Title>
        <ContainerInputs>
          
              <div>
                  <InputLabel> 
                  Nome <span>*</span>
                </InputLabel>
                  <Input type='text' placeholder='Nome do Usuário' ref= {inputName}/>
              </div>

              <div>
                <InputLabel> 
                    Idade <span>*</span>
                </InputLabel>
                <Input type='number' placeholder='Idade do usuário' ref= {inputAge}/>
            </div>
          
          </ContainerInputs>
            <div style= {{width:'100%'}}>
                <InputLabel> 
                    E-mail <span>*</span>
                </InputLabel>
                  <Input type='email' placeholder='E-mail do usuário'  ref= {inputEmail}/>
        
          </div>
      
        
          <Button> type='button' onClick= {registerNewUser}
          Cadastrar Usuário</Button>
        

    </Form>
    </Container>
  )
  
}
export default Home


/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/