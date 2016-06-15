import {Page} from 'ionic-angular';
import {USAMapPage} from '../USAMapPage/USAMapPage';
import {UkraineMapPage} from '../UkraineMapPage/UkraineMapPage';



@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  USAMapPage = USAMapPage;
  UkraineMapPage = UkraineMapPage;

  constructor() {}
}
