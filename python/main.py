import random

class Blackjack:
    def __init__(self):
        self.deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]*4

    def deal_card(self):
        return self.deck.pop(random.randint(0, len(self.deck) - 1))

if __name__ == '__main__':
    game = Blackjack()
    print('Initial card:', game.deal_card())