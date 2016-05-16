import cards from './cards.json';
import brokens from './brokens.json';
import {test} from 'tape';
import functions from '../';

test('Card Number Check', t => {
    t.plan(Object.keys(cards).length + brokens.length);

    for (var card in cards) {
        t.ok(functions.check(card), 'correct card number check');
    }

    for (var broken in brokens) {
        t.notOk(functions.check(broken), 'random number check');
    }

    t.end();
});
