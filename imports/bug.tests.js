import { chai } from 'meteor/practicalmeteor:chai';
import './bug.js';

if (Meteor.isClient) {
  describe('A test', function () {
    it('should run', function () {
      chai.assert.equal(true, true);
    });
  });
}
