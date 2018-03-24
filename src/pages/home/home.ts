import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
import { ArchivedTodosPage } from '../archived-todos/archived-todos';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todos = [];
  reorderIsEnabled: boolean = false;

  constructor(
    public navCtrl: NavController,
    private alertController: AlertController,
    private todoProvider: TodoProvider,
    private toastContrller: ToastController
    ) {
   this.todos = this.todoProvider.getTodos();
  }

  archiveTodo(archiveTodo){
    this.todoProvider.archiveTodo(archiveTodo);
  }

  goToArchivePage() {
    this.navCtrl.push(ArchivedTodosPage);
  }

  toggleReorder() {
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReorderd($event) {
    reorderArray(this.todos,$event);
  }

  openEditTodoAlert(todo,todoIndex) {
    let editTodoAlert = this.alertController.create({
      title: "Edit Todo",
      inputs: [
        {
          type: "text",
          name: "editTodoInput",
          value: todo
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Save",
          handler: (inputData) => {
            let todotText;
            todotText = inputData.editTodoInput;
            this.todoProvider.editTodo(todotText,todoIndex);

            editTodoAlert.onDidDismiss(() => {
              let addTodoToast = this.toastContrller.create({
                message: "Todo Edited",
                duration: 2000
              });
              addTodoToast.present();
            });
          }
        }
      ]
    });
    editTodoAlert.present();
  }

  openTodoAlert() {
    let addTodoAlert = this.alertController.create({
      title: "Add A Todo",
      message: "Enter Your Todo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Todo",
          handler: (inputData) => {
            let todotText;
            todotText = inputData.addTodoInput;
            this.todoProvider.addTodo(todotText);

            addTodoAlert.onDidDismiss(() => {
              let addTodoToast = this.toastContrller.create({
                message: "Todo is Added",
                duration: 2000
              });
              addTodoToast.present();
            });
          }
        }
      ]
    });
    addTodoAlert.present();
  }
}
