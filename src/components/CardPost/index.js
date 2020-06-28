import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { h2, p, p_small } from 'base/mixins/text'

const CardPost = ({ title, text, user }) => {
    return (
        <Wrapper>
            <Row>
                <Title>{user && user.name}</Title>
                <UserName>{user && user.username}</UserName>
            </Row> 
            <Row>
                <Title>{title}</Title>
            </Row>
            <Row>
                <Text>{text}</Text>
            </Row>
        </Wrapper>
    )
}
CardPost.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.object
};

const Wrapper = styled.div`
    cursor: pointer;
    border-radius: 20px;
    padding: 15px;
    transition: box-shadow 0.2s;
    border: 2px solid ${p => p.theme.color.primary};
    &:hover {
        box-shadow: 0 0 5px 5px  ${p => p.theme.color.primary};
    }
`
const Row = styled.div`
    display: flex;
    align-items: center;
    & + & {
        margin-top: 10px;
    }
`
const Title = styled.div`
    ${h2};
`
const UserName = styled.div`
    ${p_small};
    margin-left: 20px;
    color: ${p => p.theme.color.grey};
`
const Text = styled.div`
    ${p};
`

export default CardPost
