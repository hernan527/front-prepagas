import { JsonPipe } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  TemplateRef,
  ViewChild
  } from '@angular/core';
import { 
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogService } from './../../../../../services/dialog.service';
import { FormularioComponent } from "./../formulario/formulario.component";
import { DialogModule } from 'primeng/dialog';
import { NxButtonComponent } from '@aposin/ng-aquila/button';
import { NxFormfieldComponent } from '@aposin/ng-aquila/formfield';
import { NxHeadlineComponent } from '@aposin/ng-aquila/headline';
import { NxIconComponent } from '@aposin/ng-aquila/icon';
import { NxInputDirective } from '@aposin/ng-aquila/input';
import {
  NxDialogService,
  NxModalActionsDirective,
  NxModalCloseDirective,
  NxModalContentDirective,
  NxModalRef,
} from '@aposin/ng-aquila/modal';
import {
    NxPopoverComponent,
    NxPopoverTriggerDirective,
} from '@aposin/ng-aquila/popover';
import { delay } from 'rxjs/operators';
import {
  NxDropdownComponent,
  NxDropdownItemComponent,
} from '@aposin/ng-aquila/dropdown';
import { NxFormfieldErrorDirective } from '@aposin/ng-aquila/formfield';
import {
  NxNaturalLanguageFormComponent,
  NxWordComponent,
} from '@aposin/ng-aquila/natural-language-form';

type MyDialogResult = 'proceed' | 'cancel';

@Component({
    selector: 'app-form-banner',
    templateUrl: './form-banner.component.html',
    styleUrls: ['./form-banner.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
      CommonModule,
      FormularioComponent,
      DialogModule,
      NxButtonComponent,
      FormsModule,
      ReactiveFormsModule,
      NxModalContentDirective,
      NxHeadlineComponent,
      NxFormfieldComponent,
      NxInputDirective,
      NxModalActionsDirective,
      NxPopoverTriggerDirective,
      NxModalCloseDirective,
      NxPopoverComponent,
      NxIconComponent,
      NxDropdownComponent,
      NxDropdownItemComponent,
      NxFormfieldErrorDirective,
      NxNaturalLanguageFormComponent,
      NxWordComponent,
      JsonPipe
      
    ]
})
export class FormBannerComponent implements OnInit{
  @Input() isSmallScreen = false;
  visible = false;
  constructor(   
     private dialogService: DialogService,
     private readonly dialogServicio: NxDialogService,
     private readonly fb: FormBuilder
  ){}
  readonly naturalForm = this.fb.group({
    who: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    spots: new FormControl('', [
        Validators.pattern('[0-9]*'),
        Validators.required,
    ]),
});

  async ngOnInit(): Promise<void> {
  
    this.dialogService.visible$.subscribe((value) => {
      console.log("Valor actual de visible$: ", value);
      this.visible = value; // Asigna el valor a una propiedad del componente
    });
        
  
  
  
  }





  showFormDialog() {
    // this.visible = true;

    this.dialogService.toggleVisibility('results');
  }

  @ViewChild('template') templateRef!: TemplateRef<any>;

  formGroup: FormGroup = new FormGroup({ text: new FormControl('') });

  dialogRef?: NxModalRef<any, MyDialogResult | undefined>; // cancel and backdrop click return undefined

  showPopoverFlag = false;


  openModal(): void {
      this.dialogRef = this.dialogServicio.open(this.templateRef, {
          showCloseIcon: true,
          disableClose: false,
          shouldClose: (modalResult: MyDialogResult) => {
              if (modalResult === 'proceed') {
                  return true;
              }
              return !this.formGroup.dirty;
          },
      });
      this.dialogRef.closeDenied.pipe(delay(100)).subscribe(() => {
          this.showPopover();
      });
  }

  onSubmit(): void {
      this.formGroup.reset();
  }

  showPopover(): void {
      this.showPopoverFlag = true;
  }

  closePopover(): void {
      this.showPopoverFlag = false;
  }

  discard(): void {
      this.formGroup.reset();
      this.closePopover();
      this.dialogRef?.close();
  }

  
  validate() {
    Object.values(this.naturalForm.controls).forEach(control => {
        control?.markAsTouched({ onlySelf: true });
    });
}
}
