import React from 'react'
import styled from 'styled-components'
import { h1 } from 'base/mixins/text'
import { Container } from 'components'

const Header = () => {
    return (
        <Wrapper>
            <Container> 
                <Title>
                    Rocket App Posts!
                </Title>
            </Container>  
        </Wrapper>
    )
}


const Wrapper = styled.div`
    
`
const Title = styled.div`
    ${h1};
    text-align: center;
    color: ${p => p.theme.color.primary};
`

export default Header