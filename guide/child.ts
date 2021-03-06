import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'child'
})
@View({
  template: `
    <p> {{ message }} </p>
  `
})
class ChildComponent {
  message: string;
  constructor() {
    this.message = "I'm the child";
  }
}

export default ChildComponent;
