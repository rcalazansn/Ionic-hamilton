import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StoryProvider } from '../../providers/story/story';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public storyService: StoryProvider) {

  }

  goToStory() {
    //this.navCtrl.push(StoryPhotoPage)
  }

  ionViewWillEnter() {

    //tenho que modificar o html dos componente toda vez que entra para atualizar
    let myElement = (<HTMLDivElement>document.getElementById("stories"))
    myElement.innerHTML = "";

    //modificar também os componentes do próprio zuck-modal que ficam salvos
    let zukeModal = (<HTMLDivElement>document.getElementById("zuck-modal"))
    if (zukeModal) {
      if (zukeModal.parentNode) {
        zukeModal.parentNode.removeChild(zukeModal);
      }

    }

    var stories = new (<any>window).Zuck('stories', {
      backNative: true,
      autoFullScreen: false,
      skin: "Snapgram",
      avatars: true,
      list: false,
      cubeEffect: true,
      localStorage: true,
      stories: this.storyService.getFeed()
    });


  }
}
