import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService, public authService: AuthService, private router: Router) {
    this.authService = authService;
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(response => {
        console.log('onSaveData', response);
    });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }
}
