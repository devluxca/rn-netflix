import styled from 'styled-components/native';

export const ImageBackground = styled.ImageBackground`
    width: 100%;
    height: 500px;
`

export const Logo = styled.Image`
    margin-top: 260px;
    align-self: center;
    width: 300px;
    resizeMode: contain;
    height: 150px;
    position: absolute;
    z-index: 10;
`

export const Top10Section = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 10;
    position: absolute;
    z-index: 10;
    bottom: 30px;
`

export const Top10 = styled.Text`
    color: #fff;
    font-size: 14px;
`