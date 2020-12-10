import { ContaService } from './../services/conta.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit, AfterViewInit {

  public cadastroForm: FormGroup;
  public usuario: Usuario;

  constructor(
    private fb: FormBuilder,
    private contaService: ContaService
    ) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      email: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  ngAfterViewInit() {

  }

  public adicionarConta() {
    if(this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.contaService.registrarUsuario(this.usuario);
    }
  }

}
