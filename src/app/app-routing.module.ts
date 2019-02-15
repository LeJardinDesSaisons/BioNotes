import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'add-area', loadChildren: './area/add-area/add-area.module#AddAreaPageModule' },
  { path: 'areas-arborescence', loadChildren: './area/areas-arborescence/areas-arborescence.module#AreasArborescencePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
