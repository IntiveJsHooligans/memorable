import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// apollo
import { Apollo } from 'apollo-angular';
import * as Query from './../../graphql';  // GraphQL queries

@Component({
  selector: 'in-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apollo: Apollo,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.createLink(this.form.value);
  }

  createLink(data) {

    const { title } = data;

    this.apollo.mutate({
      mutation: Query.CREATE_TASK_MUTATION,
      variables: {
        title,
      },
      update: (store, { data: { createTask } }) => {
        this.updateStoreAfterCreate(store, createTask);
      },
    })
      .subscribe(
      ({ data }) => {
        console.log(data);
        this.form.reset();
      },
      (error) => { console.log('error:', error); }
      );
  }

  private updateStoreAfterCreate(store, createTask) {
    const data = store.readQuery({
      query: Query.ALL_TASKS_QUERY
    });

    data.allTasks.push(createTask);
    store.writeQuery({ query: Query.ALL_TASKS_QUERY, data });
  }
}
