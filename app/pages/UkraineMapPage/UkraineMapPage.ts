import { Page } from 'ionic-angular';
import { ukraineDirective } from './UkraineMapDirective';

@Page({
    templateUrl: 'build/pages/UkraineMapPage/UkraineMapPage.html',
    directives: [ukraineDirective]
})
export class UkraineMapPage {
    constructor() {}
}
