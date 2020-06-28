import React, { useState, useEffect }  from 'react'
import styled from 'styled-components'
import { h2, p, p_small } from '../../base/mixins/text'

const CardPost = ({ title, text, userId}) => {
    const [ users, setUsers ] = useState([]);

     useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => {
                setUsers(users)
            })
    }, [])
    
    return (
        <Wrapper>
                {
                    users.map(({id, name, username}) => {
                        return (
                            userId === id && 
                                <Row key={id}>
                                    <Title>{name}</Title>
                                    <UserName>{username}</UserName>
                                </Row> 
                            )
                    })
                }
            <Row>
                <Title>{title}</Title>
            </Row>
            <Row>
                <Text>{text}</Text>
            </Row>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    border-radius: 20px;
    padding: 10px;
    transition: box-shadow 0.2s;
    &:hover {
        box-shadow: 0 0 10px 5px  ${p => p.theme.color.secondary};
    }
`
const Row = styled.div`
    display: flex;
`
const Title = styled.div`
    ${h2};
`
const UserName = styled.div`
    ${p_small};
`
const Text = styled.div`
    ${p};
`

export default CardPost
