import { chai } from 'meteor/practicalmeteor:chai';
import Bug from './bug.js';

if (Meteor.isClient) {
  describe('A test', function () {
    it('should run', function () {
      chai.assert.equal(Bug.bug, true);
    });
  });
}
