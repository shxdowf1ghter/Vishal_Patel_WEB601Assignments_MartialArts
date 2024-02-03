import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList:ContentList;
  constructor(){
    this.contentList = new ContentList();

    this.contentList.addContent({
      id: 1,
      title: 'Martial Arts',
      description: 'Explore the captivating world of martial arts with this single-page application. From ancient traditions to modern techniques, discover the diversity of martial arts styles, renowned practitioners, and the essence of discipline and self-defense. Immerse yourself in a platform designed for enthusiasts, learners, and anyone curious about the dynamic and rich culture of martial arts.',
      creator: 'UFC',
      imgURL: 'https://imgs.search.brave.com/bZEFbGf9bqYt2D1Ap-ooUGuAaxf1eNWZZ2lRgqccHCE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRhL0NocmlzX1dl/aWRtYW5fa25vY2tf/b3V0X0FuZGVyc29u/X1NpbHZhX2F0X1VG/Q18xNjIuLmpwZw',
      type: 'Mixed Martial Arts',
      tags: ['Solo','Discipline'],
    });

    this.contentList.addContent({
      id: 2,
      title: 'Boxing',
      description: 'Boxing is a combat sport that involves two opponents throwing punches at each other with the goal of scoring points or achieving a knockout. It is characterized by its emphasis on technique, strategy, and physical conditioning.',
      creator: 'WBA',
      imgURL: 'https://imgs.search.brave.com/3GS_6-AUCOe41Rr-cFb0KlBjt5rGoQFvQNf0wGKLAqM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzEwLzE2LzEy/LzM2MF9GXzUxMDE2/MTI1Nl9NR1UzdVhJ/ODhJNGRkTVpLdkhk/aDhmZEFmWjk2Qk5R/YS5qcGc',
      type: 'Hand To Hand Combat',
      tags: ['Fighters', 'Combat Sports'],
    });

    this.contentList.addContent({
      id: 3,
      title: 'Wrestling',
      description: 'Dive into the world of wrestling, a dynamic and physically demanding sport that combines strength, technique, and strategy. Wrestling has a rich history, dating back to ancient civilizations, and has evolved into a competitive and widely-practiced sport across the globe.',
      creator: 'UWW',
      imgURL: 'https://imgs.search.brave.com/XNUMc6otPK6U7DXJzlgEctfbtNEkpwfzdoW7WfDjJ7c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzAxLzExLzYw/LzM2MF9GXzExMTYw/ODJfNms3OWVKR1o0/RVhocmUxWXFlb1RI/NGpPQlVJNWszLmpw/Zw',
      type: 'Freestyle Wrestling',
      tags: ['Athletes', 'Championships'],
    });
  }
}