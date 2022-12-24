import React from 'react';

import TrainingFilters from './sections/TrainingFilters/TrainingFilters';
import Sessions from './sections/TrainingSessions/TrainingSessions';

import './Trainings.scss';

const Trainings = () => {
  return (
    <div className='page-container trainings'>
      <h1 className='page-title'>Trainings</h1>
      <section className='trainings__filters'>
        <TrainingFilters />
      </section>
      <section className='trainings__content'>
        <Sessions />
      </section>
    </div>
  );
};

export default Trainings;
