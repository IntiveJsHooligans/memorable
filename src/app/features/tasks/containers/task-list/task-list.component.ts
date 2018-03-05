import { Component, OnInit } from '@angular/core';
// animation
import { trigger, state, style, animate, transition } from '@angular/animations';

// apollo
import { Apollo } from 'apollo-angular';
import * as Query from './../../graphql';  // GraphQL queries

// model
import { Task } from '../../models/task.model';

@Component({
  selector: 'in-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  loading = true;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery<any>({ query: Query.ALL_TASKS_QUERY })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.tasks = data.allTasks;
        this.loading = loading;
      });
  }

  onDelete(id) {
    if (confirm(`Are you sure to delete task ID: ${id}`)) {
      this.apollo
        .mutate({
          mutation: Query.DELETE_TASK_MUTATION,
          variables: {
            id,
          },
          update: (store, { data: { removeUser } }) => {
            this.updateStoreAfterDelete(store, removeUser, id);
          }
        })
        .subscribe(
        ({ data }) => { console.log(data); },
        (error) => { console.log('there was an error sending the query', error); }
        );
    }
  }

  private updateStoreAfterDelete(store, removeTask, id) {
    // Read the data from our cache for this query
    const data: any = store.readQuery({ query: Query.ALL_TASKS_QUERY });

    const index = data.allTasks.map((x) => x.id).indexOf(id);
    data.allTasks.splice(index, 1);

    // Write our data back to the cache
    store.writeQuery({ query: Query.ALL_TASKS_QUERY, data });
  }

  private getAllTasks() {

  }

}
