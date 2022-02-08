import Button from './Button';
import React, { useEffect, useState } from 'react';
import { Wrapper, Title } from '../styles/styles';
import api from '../services/api'

export default function RepositoryButton() {
    const [ repositories, setRepositories ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
      async function getRepositories() {
        setLoading(true);
        const response = await api.get('/users/Avix1/repos');
        setRepositories(response.data);
        setLoading(false);
      }
      getRepositories();
    }, []);
  
    useEffect(() => {
      console.log(repositories)
    }, [repositories])  // using console.log to see full array.

    return (
        <>
        <Title>Github Projects</Title>
        <Wrapper>
          {!loading ? repositories.map(repository => (
             <Button href={repository.html_url} target="_blank">{repository.name.replaceAll("-", " ")}</Button>
             )) : (
              <div>Carregando...</div>
              )/* state loading */}
            
            {/* <Button href="#">Animated Countdown</Button>
            <Button >Blurry Loading</Button>
            <Button >Button Ripple Effect</Button>
            <Button >Background-Slider</Button>
            <Button >3D Boxes Background</Button>
            <Button >Pokédex</Button>
            <Button >To Do List</Button> */}
        </Wrapper>
        </>
        
    )
}
