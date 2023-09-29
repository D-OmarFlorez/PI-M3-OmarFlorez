import styled from "styled-components"
import React from "react"
import holagif from "./videos/hola.gif"
const VideoTrasero = styled.div`
position: absolute;
top: 0;
width: 100%;
left: 0;
height: 100%;
z-index: -1;
`;
const BackgroundImage = styled.img`
object-fit: cover;
width: 100%;
height: 110%;
`;


const LoginComponent = ()=>{
    return (
        <VideoTrasero> 
            <BackgroundImage src = {holagif} alt="hola"/>
        </VideoTrasero>
    )
}

export default LoginComponent