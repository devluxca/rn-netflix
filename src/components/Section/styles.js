import styled from 'styled-components/native';

export const Title = styled.Text`
    color: #fff;
`

export const Container = styled.View`
`

export const FlatListContainer = styled.FlatList`
    display: flex;
    width: 100%;
    height: 180px;
    margin-top: 10px;
    margin-bottom: 30px;
`

export const Banner = styled.ImageBackground`
    display: flex;
    width: 120px;
    height: 100%;
    border-radius: 4px;
`

export const Logo = styled.Image`
    width: 100px;
    height: 45px;
    z-index: 10;
    position: absolute;
    bottom: 20px;
    left: 20px;
    align-self: center;
`

export const BorderTop = styled.View`
    height: 3px;
    width: 100px;
    background-color: #E50914;
    left: 20px;
    margin-bottom: 10px;
`