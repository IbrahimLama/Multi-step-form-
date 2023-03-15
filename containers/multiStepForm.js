import * as React from 'react';
import Steps from './Steps';
import Form from './form';
import { steps } from '../utils/contants';
import styles from '../styles/forms.module.css';
import PersonalInfo from '../components/PersonalInfo/personalInfo';

const MultiStepForm = () => {
    const [stepIndex, setStepIndex] = React.useState(0)

    return (
        <div className={styles.Form}>
            <Steps />
            <Form step={steps[stepIndex]} onNextButtonClicked={() => setStepIndex(stepIndex + 1)}>
                {stepIndex === 0 && (
                    <PersonalInfo />
                )
                }
            </Form>
        </div>

    )
}

export default MultiStepForm;