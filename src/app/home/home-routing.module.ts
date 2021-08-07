
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            // {
            //     path: 'home',
            //     loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
            // },
            {
                path: 'home',
                loadChildren: () => import('./my-home/my-home.module').then(m => m.MyHomeModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'covid',
                loadChildren: () => import('./ncovid/ncovid.module').then(m => m.NcovidModule)
            },
            {
                path: 'my-profile',
                loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule)
            }
        ]
    },
    {
        path: "404",
        component: NotFoundComponent,
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "404",
        pathMatch: "full"
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class HomeRoutingModule { }