import React from 'react';

import TrainingSessionCard from '../../../../shared/components/TrainingSessionCard/TrainingSessionCard';
import { MOCK_TRAINING_SESSIONS } from '../../../../shared/mocks/trainingSessions';

const Sessions = () => {
  return (
    <section className='trainings__sessions'>
      {MOCK_TRAINING_SESSIONS.map((trainingSession, index) => (
        <TrainingSessionCard trainingSession={trainingSession} key={index} />
      ))}
    </section>
  );
};

export default Sessions;
