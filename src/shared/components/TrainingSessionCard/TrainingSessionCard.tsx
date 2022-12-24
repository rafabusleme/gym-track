import React from 'react';

import { ITrainingSession } from '../../interfaces/trainingSessions';

import './TrainingSessionCard.scss';

interface TrainingSessionCardProps {
  trainingSession: ITrainingSession;
}

const TrainingSessionCard: React.FC<TrainingSessionCardProps> = ({ trainingSession }) => {
  return (
    <section className='training-session-card'>
      <section className='training-session-card__header'>
        <article className='training-session-card__tags'>
          {trainingSession.tags.map((tag, index) => (
            <span className='training-session-card__tags__tag' key={index}>
              {tag}
            </span>
          ))}
        </article>
        <article>2022-06-01</article>
      </section>
      <section className='training-session-card__stats'>
        <h2 className='training-session-card__subtitle'>Statistics</h2>

        <span>Duration: 120min</span>
      </section>
      <section className='training-session-card__exercises'>
        <h2 className='training-session-card__subtitle'>Exercises Done</h2>
        <article className='training-session-card__exercises__details'>
          {trainingSession.exercises.map((exercise, index) => (
            <span className='training-session-card__exercises__exercise' key={index}>
              {exercise.exerciseName}
            </span>
          ))}
        </article>
      </section>
    </section>
  );
};

export default TrainingSessionCard;
