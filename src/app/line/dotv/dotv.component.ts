import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { v4 as uuidv4, v1 as uuidv1 } from 'uuid';
import VConsole from 'vconsole';
@Component({
  selector: 'app-dotv',
  templateUrl: './dotv.component.html',
  styleUrls: ['./dotv.component.scss']
})

export class DotvComponent implements OnInit {
  public movies = [{ id: "", image: "", name: "", episode: [{ ep: "", src: "" }] }]
  public episode = { ep: "", src: "" };
  public movie = { id: "", image: "", name: "" }
  public episodeNext = { ep: "", src: "" };
  public episodePrevious = { ep: "", src: "" };
  public iframeSrc = null;
  public screenWidth = window.innerWidth;
  public screenHeight = window.innerHeight;
  constructor() { }

  ngOnInit(): void {
    var vConsole = new VConsole();
    this.movies = [
      {
        "id": uuidv4(),
        "image": "https://dooseriesth.com/uploads/521642058.jpg",
        "name": "Oh! My Sweet Liar! (2020) คู่ป่วนอลเวง",
        "episode": [
          { "ep": "4", src: '//ok.ru/videoembed/2011057031870' },
          { "ep": "5", src: '//ok.ru/videoembed/2540101634579' },
          { "ep": "6", src: '//ok.ru/videoembed/2381151996502' },
          { "ep": "7", src: '//ok.ru/videoembed/1853858318918' },
          { "ep": "8", src: '//ok.ru/videoembed/2268551318132' },
          { "ep": "9", src: '//ok.ru/videoembed/2466712914456' },
          { "ep": "10", src: '//ok.ru/videoembed/2466713307672' },
          { "ep": "11", src: '//ok.ru/videoembed/2466713438744' },
          { "ep": "12", src: '//ok.ru/videoembed/2467009530392' },
          { "ep": "13", src: '//ok.ru/videoembed/2481862412824' },
          { "ep": "14", src: '//ok.ru/videoembed/2481863526936' },
          { "ep": "15", src: '//ok.ru/videoembed/2517488765464' },
          { "ep": "16", src: '//ok.ru/videoembed/2517490600472' },
          { "ep": "17", src: '//ok.ru/videoembed/2517494729240' },
          { "ep": "18", src: '//ok.ru/videoembed/2517497416216' },
          { "ep": "19", src: '//ok.ru/videoembed/2517502331416' },
          { "ep": "20", src: '//ok.ru/videoembed/2517505018392' },
          { "ep": "21", src: '//ok.ru/videoembed/2517505149464' },
          { "ep": "22", src: '//ok.ru/videoembed/2517508426264' },
          { "ep": "23", src: '//ok.ru/videoembed/2517523630616' },
          { "ep": "24", src: '//ok.ru/videoembed/2517524089368' },
          { "ep": "25", src: '//ok.ru/videoembed/2517525203480' },
          { "ep": "26", src: '//ok.ru/videoembed/2517528283672' },
          { "ep": "27", src: '//ok.ru/videoembed/2517532346904' },
          { "ep": "28", src: '//ok.ru/videoembed/2517532543512' },
          { "ep": "29", src: '//ok.ru/videoembed/2517533526552' }
        ]
      },
      {
        id: uuidv4(),
        "image": "https://dooseriesth.com/uploads/1081580490.jpg",
        name: "General's Lady (2020) ฮูหยินป่วนจวนแม่ทัพ",
        episode: [
          { "ep": "1", src: '//ok.ru/videoembed/2343592790738' },
          { "ep": "2", src: '//ok.ru/videoembed/2343592725202' },
          { "ep": "3", src: '//ok.ru/videoembed/2343592856274' },
          { "ep": "4", src: '//ok.ru/videoembed/2421111589400' },
          { "ep": "5", src: '//ok.ru/videoembed/2213190961748' },
          { "ep": "6", src: '//ok.ru/videoembed/2213205576276' },
          { "ep": "7", src: '//ok.ru/videoembed/2213213112916' },
          { "ep": "8", src: '//ok.ru/videoembed/2213292542548' },
          { "ep": "9", src: '//ok.ru/videoembed/2213302372948' },
          { "ep": "10", src: '//ok.ru/videoembed/2213303159380' },
          { "ep": "11", src: '//ok.ru/videoembed/2213317249620' },
          { "ep": "12", src: '//ok.ru/videoembed/1768692910819' },
          { "ep": "13", src: '//ok.ru/videoembed/2213334092372' },
          { "ep": "14", src: '//ok.ru/videoembed/2213334288980' },
          { "ep": "15", src: '//ok.ru/videoembed/2380590090962' },
          { "ep": "16", src: '//ok.ru/videoembed/2213355194964' },
          { "ep": "17", src: '//ok.ru/videoembed/2213386259028' },
          { "ep": "18", src: '//ok.ru/videoembed/2213387373140' },
          { "ep": "19", src: '//ok.ru/videoembed/2213406640724' },
          { "ep": "20", src: '//ok.ru/videoembed/2213408672340' },
          { "ep": "21", src: '//ok.ru/videoembed/2213418240596' },
          { "ep": "22", src: '//ok.ru/videoembed/2213424794196' },
          { "ep": "23", src: '//ok.ru/videoembed/2213448976980' },
          { "ep": "24", src: '//ok.ru/videoembed/2213459790420' },
          { "ep": "25", src: '//ok.ru/videoembed/2213460183636' },
          { "ep": "26", src: '//ok.ru/videoembed/2213460576852' },
          { "ep": "27", src: '//ok.ru/videoembed/2213460838996' },
          { "ep": "28", src: '//ok.ru/videoembed/2213460970068' },
          { "ep": "29", src: '//ok.ru/videoembed/1845884357347' },
          { "ep": "30", src: '//ok.ru/videoembed/2213461166676' },

        ]
      },
      {
        id: uuidv4(),
        name: "The Wolf (2020) หมาป่าจอมราชันย์",
        image: "https://dooseriesth.com/uploads/87614049.jpg",
        episode: [
          { ep: '1', src: 'https://ok.ru/videoembed/2313643690669' },
          { ep: '2', src: 'https://ok.ru/videoembed/2313645460141' },
          { ep: '3', src: 'https://ok.ru/videoembed/2313646181037' },
          { ep: '4', src: 'https://ok.ru/videoembed/2313638316717' },
          { ep: '5', src: 'https://ok.ru/videoembed/2313639955117' },
          { ep: '6', src: 'https://ok.ru/videoembed/2327575530157' },
          { ep: '7', src: 'https://ok.ru/videoembed/2155209362110' },
          { ep: '8', src: 'https://ok.ru/videoembed/1815256631941' },
          { ep: '9', src: 'https://ok.ru/videoembed/2235895646833' },
          { ep: '10', src: 'https://ok.ru/videoembed/2422531295860' },
          { ep: '11', src: 'https://ok.ru/videoembed/2202234849904' },
          { ep: '12', src: 'https://ok.ru/videoembed/2202244876912' },
          { ep: '13', src: 'https://ok.ru/videoembed/2464788974322' },
          { ep: '14', src: 'https://ok.ru/videoembed/2360238869165' },
          { ep: '15', src: 'https://ok.ru/videoembed/2360239786669' },
          { ep: '16', src: 'https://ok.ru/videoembed/2610946771477' },
          { ep: '17', src: 'https://ok.ru/videoembed/2036091128485' },
          { ep: '18', src: 'https://ok.ru/videoembed/2036089817765' },
          { ep: '19', src: 'https://ok.ru/videoembed/2989729516181' },
          { ep: '20', src: 'https://ok.ru/videoembed/2989729647253' },
          { ep: '21', src: 'https://ok.ru/videoembed/2498772797958' },
          { ep: '22', src: 'https://ok.ru/videoembed/2498772666886' },
          { ep: '23', src: 'https://ok.ru/videoembed/2498772535814' },
          { ep: '24', src: 'https://ok.ru/videoembed/2023716620807' },
          { ep: '25', src: 'https://ok.ru/videoembed/2007209871881' },
          { ep: '26', src: 'https://ok.ru/videoembed/2076615314085' },
          { ep: '27', src: 'https://ok.ru/videoembed/2796279368397' },
          { ep: '28', src: 'https://ok.ru/videoembed/2534298422002' },
          { ep: '29', src: 'https://ok.ru/videoembed/3327874632209' },
          { ep: '30', src: 'https://ok.ru/videoembed/3327879547409' },
          { ep: '31', src: 'https://ok.ru/videoembed/3327884331537' },
          { ep: '32', src: 'https://ok.ru/videoembed/3327886625297' },
          { ep: '33', src: 'https://ok.ru/videoembed/3327886559761' },
          { ep: '34', src: 'https://ok.ru/videoembed/2057846852105' },
          { ep: '35', src: 'https://ok.ru/videoembed/2058784999945' },
          { ep: '36', src: 'https://ok.ru/videoembed/2058786769417' },
          { ep: '37', src: 'https://ok.ru/videoembed/2057852553737' },
          { ep: '38', src: 'https://ok.ru/videoembed/2057852684809' },
          { ep: '39', src: 'https://ok.ru/videoembed/2077136718345' },
          { ep: '40', src: 'https://ok.ru/videoembed/2077138160137' },
          { ep: '41', src: 'https://ok.ru/videoembed/2077138684425' },
          { ep: '42', src: 'https://ok.ru/videoembed/2077139798537' },
          { ep: '43', src: 'https://ok.ru/videoembed/2077139929609' },
          { ep: '44', src: 'https://ok.ru/videoembed/2094038321673' },
          { ep: '45', src: 'https://ok.ru/videoembed/2094031374857' },
          { ep: '46', src: 'https://ok.ru/videoembed/2094031899145' },
          { ep: '47', src: 'https://ok.ru/videoembed/2094032095753' },
          { ep: '48', src: 'https://ok.ru/videoembed/2094032488969' },
          { ep: '49', src: 'https://ok.ru/videoembed/2094032751113' }
        ]
      },
      {
        id:uuidv4(),
        "name": "My Dear Destiny (2020) ทั้งหัวใจให้อ๋องอี้ฉี ตอนที่ 1-4 [พากย์ไทย]",
        "image": "https://dooseriesth.com/uploads/1526445018.jpg",
        "episode": [
            {
                "ep": "ตอนที่ 1",
                "src": "https://ok.ru/videoembed/2699269442100"
            },
            {
                "ep": "ตอนที่ 2",
                "src": "https://ok.ru/videoembed/2510559775336"
            },
            {
                "ep": "ตอนที่ 3",
                "src": "https://ok.ru/videoembed/2384848423436"
            },
            {
                "ep": "ตอนที่ 4",
                "src": "https://ok.ru/videoembed/2208609929796"
            }
        ]
    }

    ]
  }

  onIframeChange(episode, movie) {
    console.log(episode);
    this.episode = episode;
    this.movie = movie;
    this.episodePrevious = this.movies.find(val => val.id == movie.id).episode.find((val: any) => val.ep == +episode.ep - 1);
    this.episodeNext = this.movies.find(val => val.id == movie.id).episode.find((val: any) => val.ep == +episode.ep + 1);
    // this.iframeName = "ตอนที่: "+episode;
    this.iframeSrc = this.episode.src + "?autoplay=1";
    // const interval = setInterval(() => {
    //   // iframe = document.getElementById('iframe1');
    //   const iframe = document.getElementById('iframe1') as HTMLElement & {
    //     mozRequestFullScreen(): Promise<void>;
    //     webkitRequestFullscreen(): Promise<void>;
    //     msRequestFullscreen(): Promise<void>;
    //   };
    //   if (iframe) {
    //     console.log(iframe, 'fullscreen')
    //     if (iframe.requestFullscreen) {
    //       iframe.requestFullscreen();
    //     } else if (iframe.webkitRequestFullscreen) {
    //       iframe.webkitRequestFullscreen();
    //     } else if (iframe.mozRequestFullScreen) {
    //       iframe.mozRequestFullScreen();
    //     } else if (iframe.msRequestFullscreen) {
    //       iframe.msRequestFullscreen();
    //     }
    //     clearInterval(interval);
    //   }
    // }, 2000);

  }

}
