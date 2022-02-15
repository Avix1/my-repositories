import React, { useState, useEffect } from 'react';
import api from '../Services/api'
import { Button, Title, Wrapper } from '../Styles/Styles'

export default function RepositoryButton() {
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
        async function getRepository() {
          const response = await api.get('/Avix1/repos');
          setRepositories(response.data);
        }
        getRepository();
      }, []);

    return (
        <>
        <Title>My Repositories</Title>
        <Wrapper>
        {repositories.map(repository => (
            <Button href={repository.html_url} target="_blank">{repository.name.replaceAll('-', ' ')}</Button>
        ))}
        </Wrapper>
        
        </>
    )
}