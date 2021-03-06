import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AppModule } from '../app.module';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.intreceptor';
import { LoggingIntercptor } from '../shared/logging.interceptor';
import { WildcardRoutingModule } from './wildcard-routing.module';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        WildcardRoutingModule,
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
    ],
    providers: [
        RecipeService,
        DataStorageService,
        AuthService,
        AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoggingIntercptor, multi: true },
    ],
})
export class CoreModule {

}
