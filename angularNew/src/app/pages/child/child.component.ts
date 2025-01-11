import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit{
  message=''
  private ac=inject(ActivatedRoute)

  ngOnInit(): void {
    console.log("**************88");
    
    this.ac.queryParams.subscribe((params:any) => {
      console.log("&&&&&&&&&&&&& 16", params);
      
    });
  
  }


}

