import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Container, Grid, CardPost } from '../../../components'
import { h2 } from '../../../base/mixins/text'

const WidgetPosts = () => {

    const [ posts, setPost ] = useState([])
    const [ search, setSearch ] = useState('');
    // const [ users, setUsers ] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(posts => {
                setPost(posts)
            })
    }, [])

    // useEffect(()=> {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(res => res.json())
    //         .then(users => {
    //             setUsers(users)
    //         })
    // }, [])

    
    const filteredPosts = posts.filter(post => {
        return !search || post.title.indexOf(search) !== -1;
    })

    return (
        <Wrapper>
            <Container>
                <Grid gap="40px">
                    <Input value={search} onChange={e => setSearch(e.target.value)} />
                    {
                        filteredPosts.map(({id, userId, title, body}) => {
                                return (
                                    <Card key={id}>
                                        <CardPost title={title} text={body} userId={userId}/>
                                    </Card>
                                )
                        })
                    }
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Card = styled.div`
    grid-column: 4 / span 6;
`
const Input = styled.input`
    ${h2};
    margin-bottom: 30px;
    padding: 10px;
    grid-row: 1;
    grid-column: 4 / span 6;
    border-radius: 10px;
    border: 1px solid ${p => p.theme.color.secondary};
    color: ${p => p.theme.color.black};
    &:hover, &:focus, &:active {
        outline: none;
    }
`

export default WidgetPosts