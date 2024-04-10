import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // Método para guardar datos en localStorage
  setItem(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  }

  // Método para recuperar datos de localStorage
  getItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
      return null;
    } catch (error) {
      console.error('Error al recuperar de localStorage:', error);
      return null;
    }
  }

  // Método para eliminar un elemento de localStorage
  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error al eliminar de localStorage:', error);
    }
  }

// clearLocalStorage: Esta función podría utilizarse para borrar todos los elementos almacenados en localStorage. Sería útil si deseas implementar una funcionalidad de "cerrar sesión" que elimine todos los datos de usuario almacenados en localStorage.
  clearLocalStorage(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error al borrar localStorage:', error);
    }
  }

// updateItem: Esta función podría utilizarse para actualizar un valor existente en localStorage. Podrías proporcionar la clave y el nuevo valor, y esta función actualizaría el valor existente con el nuevo valor.
  updateItem(key: string, newValue: any): void {
    const existingValue: any = this.getItem(key);
    if (existingValue !== null) {
      const updatedValue = { ...existingValue, ...newValue };
      this.setItem(key, updatedValue);
    }
  }
  
  // getKeys: Esta función podría utilizarse para obtener una lista de todas las claves almacenadas en localStorage. Esto podría ser útil si necesitas iterar sobre todas las claves almacenadas para realizar ciertas operaciones.
  getKeys(): string[] {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i) || '');
    }
    return keys;
  }
    
  // hasKey: Esta función podría utilizarse para verificar si una clave específica existe en localStorage.
  hasKey(key: string): boolean {
    return this.getKeys().includes(key);
  }
  
}
