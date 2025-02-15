import { cents_to_dollars } from "../scripts/utils/money.js"

describe('test suite: cents_to_dollars', () => {
    it('convert cents into dollars', () => {
        expect(cents_to_dollars(2095)).toEqual('20.95');
    });

    it('0 cents into dollars', () => {
        expect(cents_to_dollars(0)).toEqual('0.00');
    });

    it('2000.5 into dollars, it should truely round it', () => {
       expect(cents_to_dollars(2000.5)).toEqual('20.01'); 
    });

    it('2000.4 into dollars, it should truely round it', () => {
        expect(cents_to_dollars(2000.4)).toEqual('20.00');
    });
});