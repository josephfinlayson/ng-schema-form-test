import {Component} from '@angular/core';
import * as schema from './schema';
import * as layout from './layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works!';
  mySchema = schema;
  myModel = {email: 'john.doe@example.com'};
  layout = layout;
  schemaString = JSON.stringify(schema);
  layoutString = JSON.stringify(layout);
  onChanges = (event) => {
    console.log(event)
  }
  exampleJsonObject = {
    'schema': {
      'type': 'object',
      'title': 'Comment',
      'properties': {
        'name': {
          'title': 'Name',
          'type': 'string'
        },
        'email': {
          'title': 'Email',
          'type': 'string',
          'pattern': '^\\S+@\\S+$',
          'description': 'Email will be used for evil.'
        },
        'comment': {
          'title': 'Comment',
          'type': 'string',
          'maxLength': 20,
          'validationMessage': 'Don\'t be greedy!'
        }
      },
      'required': [
        'name',
        'email',
        'comment'
      ]
    },
    'form': [
      'name',
      'email',
      {
        'key': 'comment',
        'type': 'textarea',
        'placeholder': 'Make a comment'
      },
      {
        'type': 'submit',
        'style': 'btn-info',
        'title': 'OK'
      }
    ]

  };
}
