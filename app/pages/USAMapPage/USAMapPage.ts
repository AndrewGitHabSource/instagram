import { Page } from 'ionic-angular';
import { usaDirective } from './USAMapDirective';

@Page({
    templateUrl: 'build/pages/USAMapPage/USAMapPage.html',
    directives: [usaDirective]
})
export class USAMapPage {
    constructor(){}
}