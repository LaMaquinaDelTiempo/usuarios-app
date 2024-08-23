import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-user.component.html'
})
export class DeleteUserComponent {
  userId: number = 0;

   constructor(private userService: UserService) { }

  deleteUser() {
    this.userService.deleteUser(this.userId).subscribe(response => {
      console.log('Usuario eliminado:', response);
    });
  } 
}

