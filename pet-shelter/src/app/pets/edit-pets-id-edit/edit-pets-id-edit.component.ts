import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PetShelterService } from 'src/app/pet-shelter.service';

@Component({
  selector: 'app-edit-pets-id-edit',
  templateUrl: './edit-pets-id-edit.component.html',
  styleUrls: ['./edit-pets-id-edit.component.css']
})
export class EditPetsIdEditComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private service: PetShelterService, private route: ActivatedRoute) {}
  pet;
  petId;
  editForm: FormGroup;
  // editForm = new FormGroup({
  //   name: new FormControl(this.pet.name),
  //   type: new FormControl(this.pet.type),
  //   description: new FormControl(this.pet.description),
  //   skill1: new FormControl(this.pet.skills[0]),
  //   skill2: new FormControl(this.pet.skills[1]),
  //   skill3: new FormControl(this.pet.skills[2]),
  // });

  onCancel(){
    this.router.navigate(['pets'])
  }

  onSubmit() {
    let pet = {
      _id: this.petId,
      name: this.editForm.value.name,
      type: this.editForm.value.type,
      description: this.editForm.value.description,
      skill1: this.editForm.value.skill1,
      skill2: this.editForm.value.skill2,
      skill3: this.editForm.value.skill3,
    };
    // console.log(pet);
    this.service.updatePet(this.petId, pet);
    // this.router.navigate(['/pets/17'])
  }

  ngOnInit() {
    this.route.params.subscribe(
      res => {
        this.petId = res.id;
        this.service.getPet(res.id).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          res => {
            this.pet = res.Items;
            this.editForm = new FormGroup({
              name: new FormControl(this.pet.name, {
                validators: [Validators.required, Validators.minLength(3)]}),
              type: new FormControl(this.pet.type, {
                validators: [Validators.required, Validators.minLength(3)]}),
              description: new FormControl(this.pet.description, {
                validators: [Validators.required, Validators.minLength(3)]}),
              skill1: new FormControl(this.pet.skill[0]),
              skill2: new FormControl(this.pet.skill[1]),
              skill3: new FormControl(this.pet.skill[2]),
            });
          }
        );
      }
    );
  }

}
