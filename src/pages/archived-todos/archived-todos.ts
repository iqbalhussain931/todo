import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';

/**
 * Generated class for the ArchivedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archived-todos',
  templateUrl: 'archived-todos.html',
})
export class ArchivedTodosPage {

  private archiveTodos = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private todoArchive: TodoProvider
    ) {

  }

  ionViewDidLoad() {
    this.archiveTodos = this.todoArchive.getArchiveTodos();
  }

}
