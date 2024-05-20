import { Component } from '@angular/core';
import { User, UserResult } from '../../model/user.model';
import { UsersService } from '../../services/users.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule,Location } from '@angular/common';
import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule ,NgxPaginationModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(private userService: UsersService,
    private router: Router) { }
  
  users?:User
  userResults :UserResult[]= [];
  
  page: number = 1;
  pageSize: number = 5;
  config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: this.pageSize,
    currentPage: this.page};
  
  
    ngOnInit(): void {
  
    this.userService.getUsers().subscribe(
      (data) => {
        this.users=data
        if(this.users?.results){
          this.userResults=this.users?.results

        }

      },
      (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
  }

  onPageChange(number: number): void {
    this.config.currentPage = number;
  }

  showDetails(user: UserResult): void {
    this.router.navigate(['/user-details'], { queryParams: { user: JSON.stringify(user) } });
  }
  BackToHome():void{
    this.router.navigate(['/']);
    
  }

}
