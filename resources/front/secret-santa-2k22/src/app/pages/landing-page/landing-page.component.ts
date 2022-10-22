import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public user$ = this.authenticationService.user$;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
