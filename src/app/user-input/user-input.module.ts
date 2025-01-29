import { NgModule } from '@angular/core';
import { UserInputComponent } from './user-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserInputComponent],
  imports: [FormsModule],
  exports: [UserInputComponent], // makes it visible to those modules that import this module
})
export class UserInputModule {}
