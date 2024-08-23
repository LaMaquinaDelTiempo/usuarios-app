import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-user.component.html'
})
export class EditUserComponent implements OnInit {
  user = { name: '', email: '' };
  userId: number;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      const foundUser = users.find(u => u.id === this.userId);
      if (foundUser) {
        this.user = foundUser;
      }
    });
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.user).subscribe(response => {
      console.log('Usuario actualizado:', response);
    });
  }
}

