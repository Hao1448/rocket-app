import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Container, Grid, CardPost } from 'components'
import { h2 } from 'base/mixins/text'

const WidgetPosts = () => {

    const [ posts, setPost ] = useState([])
    const [ search, setSearch ] = useState('');
    const [ users, setUsers ] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(posts => {
                setPost(posts)
            })
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => {
                setUsers(users)
            })
    }, [])

    posts.map((post) => {
        return( 
            post.user = users.find((user) => {           
                return user.id === post.userId           
            })
        )
    }) 

    const filteredPosts = posts.filter(post => {
        return !search || post.user.name.indexOf(search) !== -1;
    })

    if(!posts || !users ) {
        return 'Loading...'
    }
    
    return (
        <Wrapper>
            <Container>
                <Grid gap="40px">
                    <Input placeholder='Введи имя пользователя'value={search} onChange={e => setSearch(e.target.value)} />
                    {
                       filteredPosts.map(({id, userId, title, body, user }) => {  
                            return (
                                <Card key={id}>
                                    <CardPost title={title} text={body} userId={userId} user={user}/>
                                </Card>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 40px 0;
`

const Card = styled.div`
    grid-column: 4 / span 6;
    ${breakpoint('xs', 'sm')`
        grid-column:  2 / span 10;
    `}
`
const Input = styled.input`
    ${h2};
    padding: 10px;
    grid-row: 1;
    grid-column: 4 / span 6;
    border-radius: 10px;
    border: 1px solid ${p => p.theme.color.primary};
    color: ${p => p.theme.color.black};
    &:hover, &:focus, &:active {
        outline: none;
    }
    ${breakpoint('xs', 'sm')`
        grid-column:  2 / span 10;
    `}
`

export default WidgetPosts