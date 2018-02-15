import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Console } from '@angular/core/src/console';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getPokemon();
  }

  getPokemon(){
    let pokemon = this._http.get('http://pokeapi.salestock.net/api/v2/pokemon/1/');
    pokemon.subscribe(function(data){
      var abilityList = [];
      let abilities = data["abilities"];
      for(let i = 0; i < abilities.length; i++){
        abilityList.push( { ability: abilities[i].ability.name, url: abilities[i].ability.url} );
      }
      // console.log(this.abilityList)
      var info = data["name"]+"'s abilities are ";
      for(let i = 0; i < abilityList.length; i++){
        if(i > 0){
          info += " and "+abilityList[i]["ability"];
        } else{
          info += abilityList[i]["ability"];
        }
      }
      console.log(info)
    });
  }
}
