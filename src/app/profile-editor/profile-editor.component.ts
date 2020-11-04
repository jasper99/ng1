import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
        street: [],
        city: [],
        status:[],
        zip:['']
    }),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])

  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {

    // this.profileForm.get('first').valueChanges.subscribe(x=> console.log)
  }

  updateForm() {
    this.profileForm.setValue({
      firstName: 'Nancy',
      address: {
        street: '123'
      }
    })
  }

  addAlias() {
    this.aliases.push(new FormControl(''));
  }


  onSubmit() {
    console.warn(this.profileForm.value)
  }
}
