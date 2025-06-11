import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ListaPerfilComponent } from './lista-perfil/lista-perfil';

export const App = ListaPerfilComponent;

export const appConfig = {
  providers: [provideRouter(routes)],
};
