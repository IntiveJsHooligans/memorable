import gql from 'graphql-tag';
import { Task } from './../models/task.model';

export const ALL_TASKS_QUERY = gql`
  query AllTasksQuery {
    allTasks {
      id
      title
      createdAt
      updatedAt
    }
  }
`;

export interface AllTaskQueryResponse {
  allTasks: Task[];
  loading: boolean;
}

