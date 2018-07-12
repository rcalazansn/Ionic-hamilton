import {Injectable} from '@angular/core';

@Injectable()
export class StoryProvider {

  feeds;

  constructor() {

    this.feeds =

      [
        {
          id: "1",
          photo: "https://pbs.twimg.com/profile_images/1013495300697280512/t5nzllAT_400x400.jpg",
          name: "Justos",
          link: "https://www.passarela.com.br",
          lastUpdated: 1492665454,
          items: [
            StoryProvider.buildItem("ramon-1", "photo", 3, "https://78.media.tumblr.com/f9e525073217b8bae94088b5ba99dba7/tumblr_p9kh97GOEC1sfie3io1_1280.jpg", "https://78.media.tumblr.com/f9e525073217b8bae94088b5ba99dba7/tumblr_p9kh97GOEC1sfie3io1_1280.jpg", '', true, new Date().getTime() / 1000),
            StoryProvider.buildItem("ramon-2", "photo", 5, "http://publicdomainarchive.com/wp-content/uploads/2015/03/public-domain-images-free-stock-photos-1-WTC-architecture-city.jpg", "http://publicdomainarchive.com/wp-content/uploads/2015/03/public-domain-images-free-stock-photos-1-WTC-architecture-city.jpg", 'https://ramon.codes', false, new Date().getTime() / 1000),
            StoryProvider.buildItem("ramon-3", "photo", 0, "https://78.media.tumblr.com/964c6f210ed281190fa704ebb7610af3/tumblr_p9kh8swJzV1sfie3io1_1280.jpg", "https://78.media.tumblr.com/964c6f210ed281190fa704ebb7610af3/tumblr_p9kh8swJzV1sfie3io1_1280.jpg", '', false, new Date().getTime() / 1000)
          ]
        },
        {
          id: "2",
          photo: "https://pbs.twimg.com/profile_images/874417950/003-2-square_400x400.jpg",
          name: "Adalberto",
          link: "",
          lastUpdated: 1492665454,
          items: [
            StoryProvider.buildItem("gorillaz-1", "photo", 0, "https://78.media.tumblr.com/f28c2fea6ade53a4f23e6d0ee8c009d3/tumblr_p9kh87JP2p1sfie3io1_1280.jpg", "https://78.media.tumblr.com/f28c2fea6ade53a4f23e6d0ee8c009d3/tumblr_p9kh87JP2p1sfie3io1_1280.jpg", '', false, new Date().getTime() / 1000),
            StoryProvider.buildItem("gorillaz-2", "photo", 3, "https://pbs.twimg.com/media/DeYFsxYWsAIDVAY.jpg", "https://pbs.twimg.com/media/DeYFsxYWsAIDVAY.jpg", '', false, new Date().getTime() / 1000),
          ]
        }

      ]

  }


  static buildItem(id, type, length, src, preview, link, seen, time) {
    return {
      "id": id,
      "type": type,
      "length": length,
      "src": src,
      "preview": preview,
      "link": link,
      "seen": seen,
      "time": time
    };
  }

  getFeed() {
    return this.feeds;
  }

  addFeed(obj) {
    this.feeds.unshift(obj);
  }

}