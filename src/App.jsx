import { Button, Container, ContainerInputs, Form, Input, InputLabel, Title } from './styles'


function Home(){
 
 
  return(

      <Container>
        <TopBackground>
          <img />
          </TopBackground>


    <Form>
        
        <Title> Cadastrar Usuário</Title>
        <ContainerInputs>
          <div>
              <div>
                  <InputLabel> 
                  Nome <span>*</span>
                </InputLabel>
                  <Input type='text' placeholder='Nome do Usuário'/>
              </div>

              <div>
                <InputLabel> 
                    Idade <span>*</span>
                </InputLabel>
                <Input type='number' placeholder='Idade do usuário'/>
            </div>
          </div>

            <div>
                <InputLabel> 
                    E-mail <span>*</span>
                </InputLabel>
                  <Input type='email' placeholder='E-mail do usuário'/>
        
          </div>
        </ContainerInputs>
        <Button>
          Cadastrar Usuário
        </Button>

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