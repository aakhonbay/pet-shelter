import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validator, Validators } from '@angular/forms';
import { PetShelterService } from 'src/app/pet-shelter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pets-new',
  templateUrl: './create-pets-new.component.html',
  styleUrls: ['./create-pets-new.component.css']
})
export class CreatePetsNewComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: PetShelterService, private router: Router) {}
  // formGroup: FormGroup;
  error = [];
  addForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)]}),
    type: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)]}),
    description: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)]}),
    skill1: new FormControl(''),
    skill2: new FormControl(''),
    skill3: new FormControl(''),
  });

  onCancel(){
    this.router.navigate(['pets'])
  }

  onSubmit(){
    let pet = {
      name: this.addForm.value.name,
      type: this.addForm.value.type,
      description: this.addForm.value.description,
      skill: [this.addForm.value.skill1, this.addForm.value.skill2, this.addForm.value.skill3]
    }
    this.service.addPet(pet).subscribe(res => {
      if(res.ServerMessage == "Success"){
        let id = res.Items._id
        this.router.navigate(['/pets/'+id])
      }
      if(res.ServerMessage == "Error"){
        let errs = res.Error.errors;
        for(let err in errs){
          console.log(err)
          this.error.push(errs[err].message)
        }
      }
    },
    err => {
      this.error.push('Duplicate names are not allowed')
    })
  }

  ngOnInit() {
  }

}
