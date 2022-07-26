import styled from 'styled-components/native';

export const FlatListContainer = styled.FlatList`
    width: 100%;
    height: 100px;
    margin-top: 10px;
`

export const Oval = styled.View`
    background-color: #E50914;
    padding: 2.5px;
    width: 90px;
    height: 90px;
    border-radius: 90px;
`

export const Banner = styled.Image`
    width: 85px;
    height: 85px;
    border-radius: 85px;
`
export const Logo = styled.Image`
    width: 90px;
    height: 45px;
    position: absolute;
    z-index: 10;
    bottom: 10px;
    left: 14px;
    align-self: center;
    resize-mode: contain;
`