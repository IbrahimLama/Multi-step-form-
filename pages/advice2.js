import * as React from "react"
import { Quote } from './advice';

const Advice = ({advice}) => { 

    return (
        <Quote>
            {advice}
        </Quote>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    return {
        props: {
            advice: data.slip.advice
        }
    }
}

export default Advice