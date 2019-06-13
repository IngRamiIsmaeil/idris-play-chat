import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

import * as $ from 'jquery';

const cards = window['cards'] || null;

@Component({
  selector: 'idrisgames-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})

export class CardGameComponent implements OnInit, AfterViewInit, AfterViewChecked {
  constructor() {
  }

  ngOnInit() {
    console.log('Check Card => ', cards);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
//Start by initalizing the library
      cards.init({table:'#card-table'});
//Create a new deck of cards
      const deck = new cards.Deck();
//cards.all contains all cards, put them all in the deck
      deck.addCards(cards.all);
//No animation here, just get the deck onto the table.
      deck.render({immediate:true});


      //Now lets create a couple of hands, one face down, one face up.
      const upperhand = new cards.Hand({faceUp:false, y:50});
      const lowerhand = new cards.Hand({faceUp:true, y:350});
//Deck has a built in method to deal to hands.
      deck.deal(5, [upperhand, lowerhand], 50)

      //Lets setup a handler to draw cards
      deck.click(function(card){
        if (card === deck.topCard()) {
          lowerhand.addCard(deck.topCard());
          lowerhand.render();
        }
      });


      //Let's move the deck and setup a discard pile
      deck.x -= 50;
      deck.render();
      const discardPile = new cards.Deck({faceUp:true});
      discardPile.x += 50;
      deck.render({callback:function() {
          discardPile.addCard(deck.topCard());
          discardPile.render();
        }});


      //Lets allow you to send cards to the discard pile
      lowerhand.click(function(card){
        if (card.suit == discardPile.topCard().suit
          || card.rank == discardPile.topCard().rank) {
          discardPile.addCard(card);
          discardPile.render();
          //lowerhand.render();
        }
      });



    }, 3000);
  }

  ngAfterViewChecked(): void {
  }

}
