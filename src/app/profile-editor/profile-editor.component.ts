import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
// export class ProfileEditorComponent implements OnInit, AfterViewInit {

//   profileForm = this.formBuilder.group({
//     firstName: ['', Validators.required],
//     lastName: [''],
//     address: this.formBuilder.group({
//         street: [],
//         city: [],
//         status:[],
//         zip:['']
//     }),
//     aliases: this.formBuilder.array([
//       this.formBuilder.control('')
//     ])

//   });

//   // get aliases() {
//   //   return this.profileForm.get('aliases') as FormArray;
//   // }

//   get aliases() {
//     return this.profileForm.get('aliases') as FormArray;
//   }

//   constructor(private formBuilder: FormBuilder) {

//   }

//   ngOnInit(): void {
//   }

//   ngAfterViewInit(): void{
//    // this.profileForm.setValue({ firstName: 'TEST', lastName: 'ASC' })
//   }

//   updateForm() {
//     this.profileForm.setValue({
//       firstName: 'Nancy',
//       address: {
//         street: '123'
//       }
//     })
//   }

//   addAlias() {
//     this.aliases.push(this.formBuilder.control(''));
//   }


//   onSubmit() {
//     console.warn(this.profileForm.value)
//   }
// }
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }


  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
