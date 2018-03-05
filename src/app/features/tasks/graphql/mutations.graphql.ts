import gql from 'graphql-tag';

import { Task } from '../models/task.model';

export const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskMutation($title: String!,) {
    createTask(title: $title,) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_TASK_MUTATION = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id) {
      id
      title
    }
  }
`;

export interface CreateTaskMutationResponse {
  createTask: Task;
  loading: boolean;
}
