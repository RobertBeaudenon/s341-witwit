import { NgModule } from '@angular/core';
import { RegisterComponent } from './pages/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  imports: [
    BrowserModule,//was CommonModule
    ReactiveFormsModule, //was FormsModule
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      easeTime: 300,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    
        }),
  ],
  declarations: [
    RegisterComponent
  ],
  bootstrap: [RegisterComponent]
})
export class RegisterModule { }
