import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetShelterService } from 'src/app/pet-shelter.service';

@Component({
  selector: 'app-show-one-pets-id',
  templateUrl: './show-one-pets-id.component.html',
  styleUrls: ['./show-one-pets-id.component.css']
})
export class ShowOnePetsIdComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PetShelterService, private router: Router) { }
  pet;
  petId;
  likes;
  isDisabled = false;

  onLikePet(){
    this.isDisabled = true;
    console.log(this.likes)
    this.likes++;
    console.log(this.likes)
    this.service.modifyLikes(this.petId, this.likes).subscribe(
      res => {
        this.likes = +res.Items.rating;
      }
    )
  }

  onRemovePet(){
    this.service.deletePet(this.petId).subscribe(
      res => {
        if(res.ServerMessage == 'Error') {
          // this.router.navigate(['pets'])
        }
        if(res.ServerMessage == 'Success') {
          this.router.navigate(['pets'])
        }
      }
    )
  }

  ngOnInit() {
    this.route.params.subscribe(
      res => {
        this.petId = res.id;
        this.service.getPet(res.id).subscribe(
          res => {
            // console.log('SKILLS',res.Items.skills[1])
            this.pet = res.Items;
            let serverLikes = res.Items.rating;
            if(serverLikes) {
              this.likes = +serverLikes;
            } else {
              this.likes = 0;
            }
          }
        )
      }
    )
  }
}
