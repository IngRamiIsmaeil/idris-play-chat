import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChatVideoService} from '../../../services/chat-video.service';
import {ChatUser} from '../../entities/chat-user';
import {ChatVideo} from '../../entities/chat-video';

const VIDEO_PLAY_MODUS = {
  LIVE: 'L',
  NOTIFY: 'N'
};

@Component({
  selector: 'idrisgames-other-side-video-chat',
  templateUrl: './other-side-video-chat.component.html',
  styleUrls: ['./other-side-video-chat.component.scss']
})
export class OtherSideVideoChatComponent implements OnInit {

  @Input() showVideoPlayer = true;

  @ViewChild('playVideo') playVideo: any;

  private format = 'video/webm; codecs="vp8"';
  private format_part = 'video/webm';

  video;

  videoData = new Array<Blob>();

  usersVideo = new Map<ChatUser, Array<ChatVideo>>();

  startPlayed = 0;

  endPlayed = 0;

  currentTime = 0;

  playMode = VIDEO_PLAY_MODUS.NOTIFY;

  mediaSource = null;

  sourceBuffer = null;

  queue = new Array<ArrayBuffer>();

  constructor(private chatVideoService: ChatVideoService) {

  }

  setupMediaSource() {
    //ffmpeg -f x11grab -s 1920x1080 -r 25 -i :0.0+0,0 -f webm -codec:v libvpx -quality good -cpu-used 0 -b:v 600k -maxrate 600k -bufsize 1200k -qmin 10 -qmax 42 -vf scale=-1:480 -threads 4 http://localhost:8081/test
    console.log(MediaSource.isTypeSupported(this.format));

    this.mediaSource = new MediaSource();

    this.video.src = URL.createObjectURL(this.mediaSource);

    this.mediaSource.addEventListener('sourceopen', (e) => {

      this.sourceBuffer = this.mediaSource.addSourceBuffer(this.format);

      this.sourceBuffer.mode = 'sequence';  // "sequence" or "segments"

      this.sourceBuffer.addEventListener('updatestart', (e) => { console.log('updatestart: ' + this.mediaSource.readyState); });

      this.sourceBuffer.addEventListener('updateend', (e) => {
        console.log('updateend: ' + this.mediaSource.readyState);
        if (this.mediaSource.duration !== Number.POSITIVE_INFINITY && this.video.currentTime === 0 && this.mediaSource.duration > 0) {
          this.video.currentTime = this.mediaSource.duration - 1;
          this.mediaSource.duration = Number.POSITIVE_INFINITY;
          this.sourceBuffer.timestampOffset = this.mediaSource.duration;
        }
        if (this.queue.length > 0 && !this.sourceBuffer.updating) {
          this.sourceBuffer.appendBuffer(this.queue.shift());
        }
      });

      this.sourceBuffer.addEventListener('error', (e) => { console.log('error: ' + this.mediaSource.readyState); });

      this.sourceBuffer.addEventListener('abort', (e) => { console.log('abort: ' + this.mediaSource.readyState); });

      this.sourceBuffer.addEventListener('update', (e) => { // Note: Have tried 'updateend'
        console.log('update: ' + this.mediaSource.readyState);
      });
    }, false);

    this.mediaSource.addEventListener('sourceended', (e) =>  {
      console.log('sourceended: ' + this.mediaSource.readyState);
    });

    this.mediaSource.addEventListener('sourceclose', (e) =>  {
      console.log('sourceclose: ' + this.mediaSource.readyState);
      //todo remove( buffer = mediaSource.addSourceBuffer(mime))
    });

    this.mediaSource.addEventListener('error', (e) => {
      console.log('error: ' + this.mediaSource.readyState);
    });


  }


  ngOnInit() {
    if (this.playVideo) {
      this.video = this.playVideo.nativeElement;
      this.video.addEventListener('loadedmetadata', () => {
        this.video.play();
      });
      this.video.addEventListener('error', (event) => {
        let error = event;

        // Chrome v60
        if (event.path && event.path[0]) {
          error = event.path[0].error;
        }

        // Firefox v55
        if (event.originalTarget) {
          error = error.originalTarget.error;
        }

        // Here comes the error message
        console.error(`Video error: ${error.message}`);
      }, true);
      this.video.addEventListener('onended', () => {
        console.log('video ended');
      });

      this.setupMediaSource();
    }

    if (this.playMode === VIDEO_PLAY_MODUS.LIVE){
      // live video modus --> worked only in firefox
      // on google getting error ->
      // CHUNK_DEMUXER_ERROR_APPEND_FAILED: Append: stream parsing failed. Data size=132 append_window_start=0 append_window_end=inf
      this.chatVideoService.videos$.subscribe(d => {
        if (d && d.data) {
          for (const _d of d.data ) {
            this.chatVideoService.base64StringToBlobToArrBuffer(_d, this.format).then(arrB => {
              if (this.sourceBuffer.updating) {
                this.queue.push(arrB);
              } else {
                this.sourceBuffer.appendBuffer(arrB);
              }
            });
          }

        }
      });
    } else if (this.playMode === VIDEO_PLAY_MODUS.NOTIFY) {
      // notify video modus
      this.chatVideoService.videos$.subscribe(d => {
        if (d && d.data && d.fromChatUser) {
          if (!this.usersVideo.get(d.fromChatUser)) {
            this.usersVideo.set(d.fromChatUser, new Array<ChatVideo>());
          }
          this.usersVideo.get(d.fromChatUser).push(d);
        }
      });
    }
  }

  getChatVideoForUser(chatUser: ChatUser, index = 0){
    const usersVideo = this.usersVideo.get(chatUser);
    if (usersVideo && usersVideo[index]){
      const chatVideo: ChatVideo = usersVideo[index];
      this.chatVideoService.base64ToBlob(chatVideo.data, this.format).then(dd => {
        const superBuffer = new Blob(dd, {type: this.format});
        this.video.src = window.URL.createObjectURL(superBuffer);

        // this was old implementation
        /*this.videoData.push(...dd);
        const superBuffer = new Blob(this.videoData, {type: this.format});

        if (this.video.currentTime) {
          this.currentTime = this.video.currentTime;
          this.startPlayed = this.video.played.start(0);
          this.endPlayed = this.video.played.end(0);
        }
        this.video.src = window.URL.createObjectURL(superBuffer);
        // clear the ObjectURL to free memory
        //URL.revokeObjectURL(data);

        if (this.currentTime) {
          this.video.currentTime = this.endPlayed;
        }*/
      });
    }

  }

}
