import { useEffect, useState } from 'react'
import Trash from '../../assets/trash.svg'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import api from '../../services/api'


import { AvatarUser, CardUsers, Container, ContainerUsers, Title, TrashIcon } from './styles'

function ListUsers() {  //toda a vez que a tela carrega o UseEffect é chamado 

const [users,setUsers]=useState([])
   
   
    useEffect(()=> {
      
           async function getUsers(){
                const {data} = await api.get('/usuario')
               
                setUsers(data)
            }
     
     getUsers()
    },[])


 

    return (


        <Container>
                <TopBackground/>
                <Title>Lista de usuários</Title>
                    <ContainerUsers>

                    {users.map((user)=>(
                        <CardUsers key= {user.id}>
                           <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                            <div>
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                                <p>{user.age}</p>
                            </div>
                        <TrashIcon src={Trash} alt='icone-lixo'/>
                        </CardUsers>
                    ))}
             </ContainerUsers>
            <Button type='button'>Voltar</Button>
        </Container>
    )
}
export default ListUsers