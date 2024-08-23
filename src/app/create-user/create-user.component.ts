import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl:'./create-user.component.css'
  
  
})
export class CreateUserComponent {
   user = { name: '', email: '' };
 // userService=inject(UserService);
 constructor(private userService: UserService) { }

  createUser() {
    this.userService.createUser(this.user).subscribe(response => {
      console.log('Usuario creado:', response);
    });
  } 
}

