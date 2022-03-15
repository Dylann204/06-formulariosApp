import { Component } from '@angular/core';
interface menuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class SidemenuComponent {
  templateMenu: menuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basicos',
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './template/switches',
    },
  ];

  reactiveMenu: menuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos',
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches',
    },
  ];

  authMenu: menuItem[] = [
    {
      texto: 'Registro',
      ruta: './auth/registro',
    },
    {
      texto: 'Login',
      ruta: './auth/login',
    },
  ];
}
