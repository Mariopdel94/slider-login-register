import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public panelActive = 'left';
  public isBusy = false;

  public signUp() {
    this.isBusy = true;
    setTimeout(() => {
      this.isBusy = false;
    }, 1000);
  }

  public signIn() {
    this.isBusy = true;
    setTimeout(() => {
      this.isBusy = false;
    }, 1000);
  }
}
