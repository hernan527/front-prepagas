// incrementor.component.ts
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'app-incrementor',
    templateUrl: './incrementor.component.html',
    styleUrls: ['./incrementor.component.css'],
    standalone: true
})
export class IncrementorComponent {
  @Input() valor = 18;
  @Output() valorTitularCambiado = new EventEmitter<number>();

  private intervalId: any;
  private timeoutId: any;
  @HostListener('mousedown', ['$event'])



  onMouseDown(event: Event) {
    if (event.target instanceof HTMLElement) {
      const clickedButtonId = event.target.id;
  
      if (clickedButtonId === 'incrementButton') {
        // Botón de incremento presionado
        this.intervalId = setInterval(() => {
          this.incrementar();
        }, 100);
      } else if (clickedButtonId === 'decrementButton') {
        // Botón de decremento presionado
        this.intervalId = setInterval(() => {
          this.decrementar();
        }, 100);
      }
    }
  } // Asegúrate de cerrar correctamente el bloque
  

@HostListener('mouseup', ['$event'])
onMouseUp(event: Event) {
  // Detén el incremento o decremento cuando se suelta el botón
  clearInterval(this.intervalId);
}

  incrementar() {
    this.valor++;
    // this.emitirNuevoValor();
  }

  decrementar() {
   if (this.valor > 18){
      this.valor--;
      // this.emitirNuevoValor();
   }
  }

  // private emitirNuevoValor() {
  //   this.valorCambiado.emit(this.valor);
  // }
}
