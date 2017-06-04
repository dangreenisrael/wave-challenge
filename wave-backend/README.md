# Wave Backend

## Some thoughts on testing
Instead of mocking the DB, I set up a test DB and actually write to it in the tests.
Because of this, the test coverage reports alerts that the lines within the callback 
for the DB calls are uncovered, but they are in fact covered.