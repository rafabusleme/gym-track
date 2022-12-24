export interface ITrainingSession {
  startTime: number;
  endTime: number;
  exercises: IExercise[];
  tags: string[];
}

interface IExercise {
  exerciseName: string;
  exerciseId: number;
  sets: ISet[];
}

interface ISet {
  reps: number;
  weight: number;
}
