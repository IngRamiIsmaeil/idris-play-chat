import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ChatVideoService} from '../../../services/chat-video.service';
import {ChatUser} from '../../entities/chat-user';
import {LoginComponent} from '../login/login.component';
import {LoginService} from '../../../services/login.service';


@Component({
  selector: 'idrisgames-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.scss']
})
export class VideoChatComponent implements OnInit {



  @ViewChild('recVideo') recVideo: any;

  @Input() fileName = 'my_recording';
  @Input() showVideoPlayer = true;

  @Output() startRecording = new EventEmitter();
  @Output() downloadRecording = new EventEmitter();
  @Output() fetchRecording = new EventEmitter();

  private format = 'video/webm; codecs="vp8"';
  private format_part = 'video/webm';

  private constrains = {
    audio: true,
    video: {
      facingMode: 'user',
      width: {min: 350, ideal: 850, max: 1280},
      height: {min: 250, ideal: 550, max: 720}
    }
  };

  _navigator = <any> navigator;

  localStream: MediaStream|any;

  video;

  mediaRecorder;

  recordedBlobs: any[] = null;


  isRecordingRunning = false;

  public playString = 'play Video';

  lastSize = 0;

  forSize = 30;

  fromChatUser: ChatUser;
  toChatUser: ChatUser;


  constructor(
    private chatVideoService: ChatVideoService,
    private loginService: LoginService
  ) {
    this.fromChatUser = new ChatUser( this.loginService.uiLogin.username);
    this.toChatUser = new ChatUser('Global');
  }

  ngOnInit() {
    console.log('initializing MediaRecorder for mimeType: ' + this.format_part);
    if (this.recVideo) {
      this.video = this.recVideo.nativeElement;
    }
  }
  private checkUserMedia(constrains, navigator){
    if (!navigator.mediaDevices) {
      // old version
      navigator.mediaDevices = {};
      navigator.mediaDevices.getUserMedia = (constraints) => {
        const getUserMedia = navigator.webKitGetMedia || navigator.mozGetUserMedia ||
          this._navigator.msGetUserMedia;
        if (!getUserMedia){
          return Promise.reject(new Error('Browser not support userMedia'))
        }
        return new Promise((res, rej) => {
          getUserMedia.call(navigator, constraints, res, rej)
        });
      }
    } else {
      navigator.mediaDevices.enumerateDevices().then(
        devices => {
          devices.forEach(d => {
            console.log('found Device; ', d.kind.toUpperCase(), '. Device Label: ', d.label);
          })
        }
      );
    }
  }
  private _initStream(constrains, navigator): Promise<boolean>{
    return new Promise((res, rej)=>{
      this.checkUserMedia(constrains, navigator);
      navigator.mediaDevices.getUserMedia(constrains)
        .then((stream) => {
          if ('srcObject' in this.video)  {
            this.localStream = stream;
            this.video.srcObject = this.localStream;
          } else {
            this.localStream = window.URL.createObjectURL(stream ) ;
            this.video.src = this.localStream ;
          }
          res(true);
        })
        .catch(err => {
          console.error('Error during initialization of media device >> ', err);
          rej(false);
        });
    })

  }


  public start() {
    // reinitialize the blob arry
    this.recordedBlobs = [];
    this.lastSize = 0;
    this.isRecordingRunning = true;
    // call device with option for audio and vedio
    this._initStream(this.constrains, this._navigator).then(
      (ready) => {
        if(ready) {
          try {
            // create the mediaRecorder with getting stream and for given format
            this.mediaRecorder =  new window['MediaRecorder'](this.localStream, {
              mimeType: this.format_part
            });
            // call a function to transfer the stream
            this.startRecording.emit(this.localStream);
            this.mediaRecorder.ondataavailable  =
              (e) => {
                if (e.data && e.data.size > 0) {
                  this.recordedBlobs.push(e.data);
                  console.log( 'Sizing Now ' , (this.recordedBlobs.length - this.lastSize), ' For Size ', this.forSize);
                  if ((this.recordedBlobs.length - this.lastSize) >= this.forSize){

                    const sendingData = this.recordedBlobs.slice(this.lastSize);
                    this.chatVideoService.sendGlobalVideo(this.fromChatUser, this.toChatUser, sendingData);
                    this.lastSize = this.recordedBlobs.length;
                  }
                  console.log('Recorded Data size >> ', this.recordedBlobs.length)
                }
              };
            this.video.onloadmetadata = (ev) => {this.video.play();};
            this.video.onended = () => {
              this.playString = 'play Video';
            };
            this.mediaRecorder.start(10);
          } catch (e) {
            console.error('Exception while creating MediaRecorder: ' + e);
            this.isRecordingRunning = false;
            return;
          }
        } else {
          return;
        }
      });
  }

  public stop() {
    console.log('stop recording');

    this._stopStream();
    this.mediaRecorder.stop();
    this.fetchRecording.emit(this.recordedBlobs);
    if (this.video) {
      // this.lastSize = 0;
      // this.recordedBlobs = [];
      this.video.pause();
      if ('srcObject' in this.video)  {
        this.video.srcObject = null;
      } else {
        this.video.src = null;
      }
      this.video.controls = true;
    }
    this.isRecordingRunning = false;
  }

  private _stopStream() {
    const tracks = this.localStream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  }

  public play() {
    if (!this.video) {
      return;
    }
    if (this.isRecordingRunning) {
      this.stop();
    }
    if (this.playString === 'play Video') {
      console.log('play on play clicked');
      this.playString = 'stop Video';
      const superBuffer = new Blob(this.recordedBlobs, {type: this.format_part});
      console.log('SuperBuffer ', superBuffer);
      this.video.src = window.URL.createObjectURL(superBuffer);
    } else if (this.playString === 'stop Video') {
      console.log('play on stop clicked');
      this.playString = 'play Video';
      this.video.pause();
    }

  }

  public download() {
    console.log('download recorded stream');
    const timestamp = new Date().getUTCMilliseconds();
    const blob = new Blob(this.recordedBlobs, {type: this.format_part});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = timestamp + '__' + this.fileName + '.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      this.downloadRecording.emit();
    }, 100);
  }

}
