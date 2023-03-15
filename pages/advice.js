import * as React from 'react';
import styled from 'styled-components';

export const Quote = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Ubuntu', sans-serif;
    `

const Advice = ({advice}) => { 
    return (
        <Quote>
            {`"${advice}"`}
        </Quote>
    )
}

export const getServerSideProps = async (context) => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    return {
        props: {
            advice: data.slip.advice
        }
    }
}

export default Advice