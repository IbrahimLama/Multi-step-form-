import React from "react";
import styled from 'styled-components';

const Header = styled.div`
`

const SubHeader = styled.div`
`

const NextButton = styled.button`
`
const Form  = ({step, children, onNextButtonClicked}) => {
    return (
        <div>
            <Header>
                {step.title}
            </Header>
            <SubHeader>
                {step.subtitle}
            </SubHeader>
            {children}
            <NextButton onClick={onNextButtonClicked}>Next</NextButton>
        </div>
    )
}

export default Form;