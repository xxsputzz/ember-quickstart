import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponenet extends Component {
    @action
    showPerson(person) {
        alert(`The person's name is ${person}!`);
    }
}