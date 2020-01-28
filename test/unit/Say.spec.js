/***************************************************************************************************************************************************************
 *
 * Say unit tests
 *
 **************************************************************************************************************************************************************/


const { Say } = require('../../src/Say.js');


test(`Say - Say will print to console log`, () => {
	console.log = jest.fn();

	Say( 'text' );

	expect( console.log.mock.calls[0][0].length > 0 ).toBe( true );
});
