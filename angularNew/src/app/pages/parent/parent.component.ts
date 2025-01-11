import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-parent',
  imports: [RouterLink ,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent  {
  djjj="nfn";
  ap1='ap';
private router=inject(Router)


dj()

{
  const message = 'dj';

  this.router.navigate(["/child",{queryParams:message}] );

}
ap(){
  const message = 'ap';

  this.router.navigate(["/child" ,message]);

}
}
