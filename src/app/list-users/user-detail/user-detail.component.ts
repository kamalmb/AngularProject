import { Component, OnInit } from '@angular/core';
import { UserResult } from '../../model/user.model';
import { Router, RouterModule, RouterOutlet,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-user-app',
  standalone: true,
  imports: [CommonModule,RouterModule,NgxPaginationModule,RouterOutlet],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{
  user: UserResult | undefined;
  
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      const userJson = params['user'];
      if (userJson) {
        this.user = JSON.parse(userJson) as UserResult;
       }
    });
  }

  BackToUser():void{
    this.router.navigate(['/users']);
  }
  
}
