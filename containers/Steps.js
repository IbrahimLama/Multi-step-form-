import React from 'react';
import styles from '../styles/steps.module.css'

const StepsDetails = [
  {
    title: 'your info',
  },
  {
    title: 'Select plan',
  },
  {
    title: 'add-ons',
  },
  {
    title: 'summary',
  },
];

const Steps = () => {
  return (
    <main className={styles.Steps}>
      <div className={styles.StepsBG}>
        {StepsDetails.map((step, index) => {
          const { title } = step;
          return (
            <div key={title} className={styles.Step}>
              <div className={styles.Number}>{index + 1}</div>
              <div className={styles.Details}>
                <div className={styles.Header}>{`Step ${index}`}</div>
                <div className={styles.Title}>{title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Steps;
