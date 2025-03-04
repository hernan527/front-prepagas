import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private readonly breakpoints = {
    small: '(max-width: 480px)',
    medium: '(min-width: 481px) and (max-width: 992px)',
    large: '(min-width: 993px)',
  };

  private breakpointObserver = inject(BreakpointObserver);

  // Creamos un BehaviorSubject para almacenar el estado
  private screenWidthSubject = new BehaviorSubject<BreakpointState>(null as any);

  // Inicializamos las variables de acuerdo al primer valor del estado.
  isSmall = false;
  isMedium = false;
  isLarge = false;

  constructor() {
    // Suscribimos al observable de BreakpointObserver para obtener actualizaciones de los cambios
    this.breakpointObserver.observe(Object.values(this.breakpoints)).subscribe((state: BreakpointState) => {
      // console.log('Breakpoint state changed:', state);
      
      // Verificamos el contenido de los breakpoints
      // console.log('Breakpoint breakpoints content:', state.breakpoints);

      // Actualizamos el BehaviorSubject con el nuevo estado
      this.screenWidthSubject.next(state);

      // Actualizamos las propiedades isSmall, isMedium, isLarge en función del estado de los breakpoints
      this.isSmall = state.breakpoints[this.breakpoints.small] ?? false;
      this.isMedium = state.breakpoints[this.breakpoints.medium] ?? false;
      this.isLarge = state.breakpoints[this.breakpoints.large] ?? false;

      // Verificar si las propiedades se actualizan correctamente
      // console.log('Updated values:', { isSmall: this.isSmall, isMedium: this.isMedium, isLarge: this.isLarge });
    });

    // Si ya se está observando el estado, obtenemos el valor inicial.
    this.breakpointObserver
      .observe(Object.values(this.breakpoints))
      .subscribe((state) => {
        this.isSmall = state.breakpoints[this.breakpoints.small] ?? false;
        this.isMedium = state.breakpoints[this.breakpoints.medium] ?? false;
        this.isLarge = state.breakpoints[this.breakpoints.large] ?? false;

        // console.log('Initial values (on service initialization):', {
        //   isSmall: this.isSmall,
        //   isMedium: this.isMedium,
        //   isLarge: this.isLarge,
        // });
      });
  }

  // Usamos el BehaviorSubject como un observable para obtener el estado
  screenWidth$ = this.screenWidthSubject.asObservable();
}
