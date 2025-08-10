import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Movies } from './movies/movies';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Movies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   movies:any[]=[
    {
      movieName:"Squid Game",
      imageURl:"https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQTDI_bMtjG5FMrmK7TilFf8000Rs-dYkSk61V6sJBKyGiD3dCw5BbUbP4nFwtou-yLVCfDyqrgBROBLKduc176Z7huyI0Xh9bMSyU__z4bmjp35FhCZx-ljS7TbkgwIuw-YeKwkEMiIUwSLtk1uNmhw-.jpg?r=101"
    },
    {
      movieName:"Money Heist",
      imageURl:"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA=="
    },
    {
      movieName:"When Life Gives You Tangerines" ,
      imageURl:"https://images.herzindagi.info/her-zindagi-english/images/2025/05/29/article/image/When-Life-Gives-You-Tangerines-Controversy-1748514030474.webp"
    },
    {
      movieName:" Stranger Things",     
       imageURl:"https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Stranger_Things_Poster.jpg/250px-Stranger_Things_Poster.jpg"
    },
    {
      movieName:"Lucifer",
      imageURl:"https://qph.cf2.quoracdn.net/main-qimg-ddbdbaadc0c5ddf7f4288947b068ab8d-lq"
    },
    {
      movieName:"Aap Jaisa Koi",
      imageURl:   " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlgd49Q9P3XWC9Nlr4NHTL4UNqq-LXY-jrhHBlOV1EMcmzXaBHjIfShzh-XXviP_h7us&usqp=CAU"
    },
    {
      movieName:"The Diplomat",
      imageURl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOup5MadctS6ILoXPmQZ8rUou-6e8lS5n6TP6V4aKpgtSPchTmzKle1k1ImHUbfCB5PY&usqp=CAU"
    },
    {
      movieName:"Do Patti",
      imageURl:"https://upload.wikimedia.org/wikipedia/en/9/9b/Do_Patti.jpg"
    },
    {
      movieName:"Amaran",
      imageURl:"https://m.media-amazon.com/images/M/MV5BNTAzMGQ2MGItMjk5OC00YWIwLThmMjUtYmNjMTIxNzVlZWQ4XkEyXkFqcGc@._V1_.jpg"
    },
    {
      movieName:"Jewel Thief-The heist Begins",
      imageURl:"https://upload.wikimedia.org/wikipedia/en/a/ab/Jewel_Thief_%E2%80%93_The_Heist_Begins_poster.jpg"
    },
   ]
}
