import { Injectable, ApplicationRef, Renderer2, RendererFactory2 } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DomService {
  
  private renderer: Renderer2;
  rendererFactory: any;

  constructor () {
    // Get an instance of Angular's Renderer2
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
  
  createRecaptchaContainer() {
    // Use Angular's Renderer2 to create the div element
    const recaptchaContainer = this.renderer.createElement('div');
    // Set the id of the div
    this.renderer.setProperty(recaptchaContainer, 'id', 'recaptcha-container');
    // Append the created div to the body element
    this.renderer.appendChild(document.body, recaptchaContainer);

    return recaptchaContainer;
  }
}


