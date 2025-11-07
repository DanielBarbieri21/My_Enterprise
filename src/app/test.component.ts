import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  template: `
    <div style="padding: 20px; background: #f0f0f0; min-height: 100vh;">
      <h1>Teste - Aplicação Angular Funcionando!</h1>
      <p>Se você está vendo isso, o Angular está funcionando corretamente.</p>
    </div>
  `,
})
export class TestComponent {}

