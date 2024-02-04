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
    ];    
  }
}