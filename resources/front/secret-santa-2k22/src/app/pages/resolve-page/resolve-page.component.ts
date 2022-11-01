import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {filter, map, Observable} from 'rxjs';
import {RawUserData} from '../../models/user';

@Component({
  selector: 'app-resolve-page',
  templateUrl: './resolve-page.component.html',
  styleUrls: ['./resolve-page.component.scss']
})
export class ResolvePageComponent implements OnInit {
  public active = false;
  public raqouc$: Observable<RawUserData> = this.authenticationService
    .user$
    .pipe(
      filter(user => !!user),
      map(user => user!.raqouc)
    )

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

}
