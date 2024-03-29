import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {IsReadyService} from "../../services/is-ready.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public user$ = this.authenticationService.user$;
  public isReady$: Observable<boolean> = this.isReadyService.isReady$;

  constructor(
    private authenticationService: AuthenticationService,
    private isReadyService: IsReadyService
  ) {
  }

  ngOnInit(): void {
  }

}
