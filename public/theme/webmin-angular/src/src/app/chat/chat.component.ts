import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonDataService } from './../common-data.service';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { ChatService } from './chat.service';
import { Chat } from './chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ChatService]
})
export class ChatComponent implements OnInit {

    public scrollbarY = { axis: 'y', theme: 'minimal-dark'}
	
  	isMenuActive:boolean = false;
 
    chat: Chat[];
    activeChatUser: string;
    activeChatUserImg: string;
    @ViewChild('messageInput') messageInputRef: ElementRef;

    messages = new Array();
    item: number = 0;

    constructor(private _commondata: CommonDataService, private elRef: ElementRef, private chatService: ChatService) { 
      this.chat = chatService.chat1;
      this.activeChatUser = "Martin Smith";
    }

    ngOnInit() {
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

    PutMessage() {
    if (this.messageInputRef.nativeElement.value != "") {
      this.messages.push(this.messageInputRef.nativeElement.value);
    }
    this.messageInputRef.nativeElement.value = "";
    this.messageInputRef.nativeElement.focus();
  }

    switchClass(){
      this.isMenuActive = !this.isMenuActive;
  }

  //chat user list click event function
  doActive(event, chatId: string) {
    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.getElementsByClassName('pt-15');
    //do something with selected elements
    [].forEach.call(allAnchors, function (item: HTMLElement) {
      item.setAttribute('class', 'pt-15');
    });
    //set active class for selected item 
    event.currentTarget.setAttribute('class', 'pt-15 bg-light');

    this.messages = [];


    if (chatId === 'chat1') {
      this.chat = this.chatService.chat1;
      this.activeChatUser = "Martin Smith";
    }
    else if (chatId === 'chat2') {
      this.chat = this.chatService.chat2;
      this.activeChatUser = "Paul Flavius";
    }
    else if (chatId === 'chat3') {
      this.chat = this.chatService.chat3;
      this.activeChatUser = "Anne Smith";
    }
    else if (chatId === 'chat4') {
      this.chat = this.chatService.chat4;
      this.activeChatUser = "Sarah Libson";
    }
    else if (chatId === 'chat5') {
      this.chat = this.chatService.chat5;
      this.activeChatUser = "Micheal Bean";
    }
    else if (chatId === 'chat6') {
      this.chat = this.chatService.chat6;
      this.activeChatUser = "Sarah Libson";
    }
    else if (chatId === 'chat7') {
      this.chat = this.chatService.chat7;
      this.activeChatUser = "Paul Flavious";
    }
    else if (chatId === 'chat8') {
      this.chat = this.chatService.chat8;
      this.activeChatUser = "Sarah Libson";
    }
    else if (chatId === 'chat9') {
      this.chat = this.chatService.chat9;
      this.activeChatUser = "Paul Flavious";
    }
  }

}
