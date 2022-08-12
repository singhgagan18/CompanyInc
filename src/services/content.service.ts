import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',

})
export class ContentService {
  constructor() { }
  pages: Object = {
    'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/bg00.jpg'},
    'about': {title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/bg01.jpg'},
    'ourCustomers': {title: 'Our Customers', subtitle: 'Our Customers', content: 'Our Valued Customers', image: 'assets/bg02.jpg'},
    'ourServices': {title: 'Our Services', subtitle: 'Our Services', content: 'Our Renowned Services.', image: 'assets/bg02.jpg'}
  };
}