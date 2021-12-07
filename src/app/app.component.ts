import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'gets';
  loadedFeature='depence';

  onNavigate(feature: string){
    this.loadedFeature=feature;
  }

  loadedRevenu='revenu';
  onNavigateRevenu(revenu: string){
    this.loadedRevenu=revenu;
  }
  creatingrevenu='creating-revenuitem';
  onNavigateRevenuC(revenu: string){
    this.creatingrevenu=revenu;
  }
  


}
