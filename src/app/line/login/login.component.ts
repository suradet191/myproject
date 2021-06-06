import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import liff from '@line/liff';
import VConsole from 'vconsole';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  liffId = "";
  profile: any = {};
  model: any
  constructor(
    private route: ActivatedRoute,
    // private lineApiService: LineApiService
  ) { }

  async ngOnInit() {
    console.log('start')
    var vConsole = new VConsole();
    // vConsole.show();
    this.liffId = this.route.snapshot.paramMap.get("liffId") as string
    await liff.init({ liffId: this.liffId });
    if (liff.isLoggedIn() == false) {
      liff.login();
    } else {
      console.log('feedData')
      console.log(liff.id)
      this.feedData();
    }
  }

  async feedData() {
    try {

      this.model = [
        {
          "h": "getAccessToken",
          "d": liff.getAccessToken()?.toString()
        },
        {
          "h": "getDecodedIDToken",
          "d": liff.getDecodedIDToken()
        },
        {
          "h": "getFeatures",
          "d": liff.getFeatures()
        },
        {
          "h": "getContext",
          "d": liff.getContext()
        },
        {
          "h": "getIDToken",
          "d": liff.getIDToken()
        },
        {
          "h": "getIsVideoAutoPlay",
          "d": liff.getIsVideoAutoPlay()
        },
        {
          "h": "getLanguage",
          "d": liff.getLanguage()
        },
        {
          "h": "getLineVersion",
          "d": liff.getLineVersion()
        },
        {
          "h": "getOS",
          "d": liff.getOS()
        },

        {
          "h": "getProfilePlus",
          "d": liff.getProfilePlus()
        },
        {
          "h": "getVersion",
          "d": liff.getVersion()
        },
        {
          "h": "id",
          "d": liff.id
        },
        {
          "h": "shareTargetPicker",
          "d": liff.isApiAvailable("shareTargetPicker")
        },
        {
          "h": "multipleLiffTransition",
          "d": liff.isApiAvailable("multipleLiffTransition")
        },
        {
          "h": "isInClient",
          "d": liff.isInClient()
        },
        {
          "h": "permanentLink",
          "d": liff.permanentLink
        }
      ]
      liff.getProfile().then((result:any) => {
        this.model.push({
          "h": "getProfile",
          "d": result
        });
        this.model.messageToChat = "hello! " + result.displayName
        this.profile = result
      });
      liff.getFriendship().then((result:any) => {
        this.model.push({
          "h": "getFriendship",
          "d": result
        });
      });
      // // liff.getAdvertisingId().then(result => {

      // // })
      // // this.model.getContext = liff.getContext();
      // this.model.getDecodedIDToken = liff.getDecodedIDToken();
      // this.model.getFeatures = liff.getFeatures();
      // liff.getFriendship().then(result => {
      //   this.model.getFriendship = result
      // });
      // this.model.getIDToken = liff.getIDToken();
      // this.model.getIsVideoAutoPlay = liff.getIsVideoAutoPlay();
      // this.model.getLanguage = liff.getLanguage();
      // this.model.getLineVersion = liff.getLineVersion();
      // this.model.getOS = liff.getOS();
      // liff.getProfile().then(result => {
      //   this.model.getProfile = result
      // });
      // this.model.getProfilePlus = liff.getProfilePlus();
      // this.model.getVersion = liff.getVersion();
      // this.model.id = liff.id;
      // // liff.initPlugins()
      // this.model.isApiAvailable_shareTargetPicker = liff.isApiAvailable("shareTargetPicker");
      // this.model.isApiAvailable_multipleLiffTransition = liff.isApiAvailable("multipleLiffTransition");
      // this.model.isInClient = liff.isInClient();
      // this.model.permanentLink = liff.permanentLink;
      // liff.scanCode
    } catch (error) {
      console.error('feedData', error)
    }
  }

  async onSendMessageToChat() {
    await liff.init({ liffId: this.liffId });
    // window.location.href = 'https://line.me/R/oaMessage/@875kcrba/hello'

    await liff.sendMessages([{
      type: 'text',
      text: this.model.messageToChat
    }])
      .then(function () {
        window.alert('Message sent');
        liff.closeWindow();
      }).catch(function (error: any) {
        console.error('Error sending message:', error)
        window.alert('Error sending message: ' + error);
      });

  }

  onLogout() {
    liff.logout();
  }

  onTest() {
    alert('message is:' + this.model.messageToChat)
  }

  onAddLine() {
    window.location.href = 'https://line.me/R/oaMessage/@875kcrba/hello'
  }


  async onReplySLineSdk() {


    // const client = new Client({
    //   channelAccessToken: '<channel access token>'
    // });

    // const message = {
    //   type: 'text',
    //   text: 'Hello World!'
    // };

    // client.replyMessage('<replyToken>', message)
    //   .then(() => {
    //     console.log('reply message success')
    //   })
    //   .catch((err: any) => {
    //     console.error('reply message error', err)
    //   });
  }

  async onShareTargetPicker() {
    liff.shareTargetPicker([
      {
        "type": 'text',
        "text": this.model.messageToChat
      }
    ])
      .then((result: any) => {
        console.log('shareTargetPicker', result)
        if (result && result.status) {
          window.alert('shareTargetPicker: ' + result.status)
        }
      }).catch((error:any) => {
        window.alert('shareTargetPicker error' + error)
      })
  }

}
