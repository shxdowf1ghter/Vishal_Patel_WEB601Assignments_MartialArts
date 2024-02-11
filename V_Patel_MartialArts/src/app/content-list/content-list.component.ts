import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { NgFor, NgStyle } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [NgFor, NgStyle, ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
})
export class ContentListComponent {
  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 1,
        title: 'Martial Arts',
        description: 'Explore the captivating world of martial arts with this single-page application. From ancient traditions to modern techniques, discover the diversity of martial arts styles, renowned practitioners, and the essence of discipline and self-defense. Immerse yourself in a platform designed for enthusiasts, learners, and anyone curious about the dynamic and rich culture of martial arts.',
        creator: 'UFC',
        imgURL: 'https://imgs.search.brave.com/bZEFbGf9bqYt2D1Ap-ooUGuAaxf1eNWZZ2lRgqccHCE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRhL0NocmlzX1dl/aWRtYW5fa25vY2tf/b3V0X0FuZGVyc29u/X1NpbHZhX2F0X1VG/Q18xNjIuLmpwZw',
        type: 'Mixed Martial Arts',
        tags: ['Solo','Discipline'],
      },
      {
        id: 2,
      title: 'Boxing',
      description: 'Boxing is a combat sport that involves two opponents throwing punches at each other with the goal of scoring points or achieving a knockout. It is characterized by its emphasis on technique, strategy, and physical conditioning.',
      creator: 'WBA',
      imgURL: 'https://imgs.search.brave.com/3GS_6-AUCOe41Rr-cFb0KlBjt5rGoQFvQNf0wGKLAqM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzEwLzE2LzEy/LzM2MF9GXzUxMDE2/MTI1Nl9NR1UzdVhJ/ODhJNGRkTVpLdkhk/aDhmZEFmWjk2Qk5R/YS5qcGc',
      type: 'Hand To Hand Combat',
      tags: ['Fighters', 'Combat Sports'],
      },
      {
        id: 3,
      title: 'Wrestling',
      description: 'Dive into the world of wrestling, a dynamic and physically demanding sport that combines strength, technique, and strategy. Wrestling has a rich history, dating back to ancient civilizations, and has evolved into a competitive and widely-practiced sport across the globe.',
      creator: 'UWW',
      imgURL: 'https://imgs.search.brave.com/XNUMc6otPK6U7DXJzlgEctfbtNEkpwfzdoW7WfDjJ7c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzAxLzExLzYw/LzM2MF9GXzExMTYw/ODJfNms3OWVKR1o0/RVhocmUxWXFlb1RI/NGpPQlVJNWszLmpw/Zw',
      type: 'Freestyle Wrestling',
      tags: ['Athletes', 'Championships'],
      },
      {
        id: 4,
        title: 'Kick Boxing',
        description: 'Intense!',
        creator: 'WAKO',
        imgURL: 'https://imgs.search.brave.com/lZUlLaroNbEsri8R9Q_PsBzmIuEVmzhNdJ-_OW_dFv4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg4/MzU0MjQyL3Bob3Rv/L3RyYWluaW5nLW9m/LWtpY2tib3hlci13/b21hbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9TVhRZ2Jz/YjFMdGF5UlRybXZu/QndYeXdzMnlVbUVz/dkJBT0FNTXprTlM3/MD0',
        type: 'Individual Sport',
        tags: ['WAKO', 'FightNight'],
      },
      {
        id: 5,
        title: 'Karate',
        description: 'Precision',
        creator: 'WKF',
        imgURL: 'https://imgs.search.brave.com/Ox82CU6J0otHYsQbmLMQWdnnfGDl4Qy1zb7Jx9OxXgM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk3LzMwLzQy/LzM2MF9GXzI5NzMw/NDI2M19Ld2R4T2E2/T016WGFrQ2pVZ3px/eFI3Nkp0amkxbVJu/eC5qcGc',
        type: 'Combat Sport',
        tags: ['Discipline', 'CombatSports'],
      },
      {
        id: 6,
        title: 'capoeira',
        description: 'Dynamic',
        creator: 'Various',
        imgURL: 'https://imgs.search.brave.com/2av8_zHlEKq0II2b6Vt6Nv4crjyDt39u0LyiwNrDnBg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMDMvMTgwMDAz/LTEzOC04ODQ3RjY1/NC9PdmVydmlldy1j/YXBvZWlyYS5qcGc_/dz04MDAmaD00NTAm/Yz1jcm9w',
        type: 'Individual Sport',
        tags: ['BrazilianMartialArt', 'MusicAndMovement', 'EnergeticFlow'],
      },
      {
        id: 7,
        title: 'kalari payutu',
        description: 'Dynamic',
        creator: 'India',
        imgURL: 'data:image/jpeg;base64,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',
        type: 'Individual Sport',
        tags: ['IndianMartialArt', 'EnergeticFlow'],
      },
    ];    
  }
  

  searchTitle: string = '';
foundContent: boolean = false;



searchContent() {
  this.foundContent = this.contentArray.some(content => content.title === this.searchTitle);
  return this.foundContent;
}
}