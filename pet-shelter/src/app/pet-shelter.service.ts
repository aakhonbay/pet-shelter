import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PetShelterService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllFromServer(){
    return this.http.get<any>('/api/pets');
  }

  addPet(pet) {
    return this.http.post<any>('/api/pets', pet)
  }

  getPet(id) {
    return this.http.get<any>('/api/pets/'+id);
  }

  updatePet(id, pet){
    return this.http.put<any>('/api/pets/'+id, pet). subscribe(
      res => {
        if(res.ServerMessage == "Success") {
          this.router.navigate(['pets/'+id]);
        }
        else {
          console.log(res.Error.errors);
        }
      },
      err => {
        // console.log(err)
      }
    )
  }

  deletePet(id){
    return this.http.delete<any>('/api/pets/' +id);
  }

  modifyLikes(id, likes){
    // console.log(id)
    return this.http.patch<any>('/api/pets/' + id +'/like', {likes: likes});
  }

}
