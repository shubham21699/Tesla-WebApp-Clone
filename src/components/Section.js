import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Section({ title, description, backgroundImg, LeftBtnText, RightBtnText }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Slide top>
                <ItemText className='animated bounceInDown'>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Slide>


            <Buttons>
            <Fade top>

                <ButtonGroup>

                        <LeftButton>
                            { LeftBtnText }
                        </LeftButton>
                        {
                            RightBtnText && 
                            <RightButton>
                            { RightBtnText }
                            </RightButton>
                        }

                </ButtonGroup>
                </Fade>


                <DownArrow src="/images/down-arrow.svg" />

            </Buttons>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    scroll-snap-align: start;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    p {
        a {
            border-bottom: 1px solid black;
            cursor: pointer;
            :hover {
                border-bottom: 2px solid black;
            }
        }
    }
`

const Buttons = styled.div``

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    color: white;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    :hover {
        opacity: 1;
    }
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`