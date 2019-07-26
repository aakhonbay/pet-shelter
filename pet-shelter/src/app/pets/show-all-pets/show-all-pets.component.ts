import { Component, OnInit } from '@angular/core';
import { PetShelterService } from 'src/app/pet-shelter.service';

@Component({
  selector: 'app-show-all-pets',
  templateUrl: './show-all-pets.component.html',
  styleUrls: ['./show-all-pets.component.css']
})
export class ShowAllPetsComponent implements OnInit {

  constructor(private service: PetShelterService) { }
  pets;


  ngOnInit() {
    this.service.getAllFromServer().subscribe(
      res => {
        if(res.Items.length > 0) {
          this.pets = res.Items;
          this.pets.sort(function(a, b) {
            var nameA = a.type.toUpperCase(); // ignore upper and lowercase
            var nameB = b.type.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
        }
        else{
          this.pets = null;
        }
        // this.pets = res
      }
    )
  }

}
