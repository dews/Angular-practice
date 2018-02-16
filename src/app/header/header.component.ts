import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { TestLoadTimes } from '../shared/testLoadTimes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService,
    public authService: AuthService,
    private testLoadTimes: TestLoadTimes) {
      this.authService = authService;
   }

  onSaveData() {
    this.dataStorageService.storeRecipes().then((response: Response) => {
      console.log(response);
    });
  }

  onFetchData() {
    console.log('onFetchData', this.testLoadTimes.storeRecipes());
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
