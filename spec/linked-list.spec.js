describe('Linked List', function() {
  let list;
  beforeEach(function() {
    list = new LinkedList();
  });

  describe('Insert method', function() {
    it('Insert Object With Key abc Correctly', function() {
      let object = { key: 'abc' };
      list.insert(object);
      expect(list.contains(object.key)).toEqual(true);
      expect(list.size()).toEqual(1);
    });
    it('sorts list as inserts', function() {
      let object1 = { key: 'dcf' };
      let object2 = { key: 'qwerty' };
      let object3 = { key: 'asdf' };
      list.insert(object1, object2, object3);
      expect(list.contains(object1.key)).toEqual(true);
      expect(list.contains(object2.key)).toEqual(true);
      expect(list.contains(object3.key)).toEqual(true);
      expect(list.size()).toEqual(3);
      expect(list.toString()).toEqual('asdf,dcf,qwerty');
    });
    it('it should ignore object with empty key', function() {
      let object1 = {};
      let object2 = {something: 'dfd', notAKey: 'werwe'}
      list.insert(object1, object2);
      expect(list.size()).toEqual(0);
    });
  });
  describe('Remove method', function() {
    it('should remove list item by key', function() {
      let object = { key: 'abc' };
      list.insert(object);
      expect(list.contains(object.key)).toEqual(true);
      list.remove(object.key);
      expect(list.size()).toEqual(0);
      expect(list.contains(object.key)).toEqual(false); //aw yeah
    });
    it('should add mult obj and remove one', function() {
      let object1 = { key: 'abc' };
      let object2 = { key: 'bbbb' };
      let object3 = { key: 'ccc' };
      list.insert(object1, object2, object3);
      expect(list.size()).toEqual(3);
      list.remove(object2.key);
      expect(list.size()).toEqual(2);
      expect(list.contains(object2.key)).toEqual(false);
      expect(list.toString()).toEqual('abc,ccc');
    });
  });
  describe('Contains method', function() {
    it('should contain object {key: "abc"} after it was inserted', function() {
      let object1 = { key: 'abc' };
      list.insert(object1);
      expect(list.contains(object1.key)).toEqual(true);
    });
    it('should return true for key "zebra" after more than one insert', function() {
      let object1 = { key: 'abc' };
      let object2 = { key: 'zebra' };
      let object3 = { key: 'def' };
      list.insert(object1, object2, object3);
      expect(list.contains(object2.key)).toEqual(true);
    });
  });
  describe('Size method', function() {
    it('should return 0 if no items have been inserted', function() {
      expect(list.size()).toEqual(0);
    });
    it('should return 3 after three items are inserted', function() {
      let object1 = { key: 'abc' };
      let object2 = { key: 'def' };
      let object3 = { key: 'jkl' };
      list.insert(object1, object2, object3);
      expect(list.size()).toEqual(3);
    });
  });
  describe('ToString method', function() {
    it('should return return a comma separated list of the keys in the objects', function() {
      let object1 = { key: 'abc' };
      let object2 = { key: 'zebra' };
      let object3 = { key: 'def' };
      list.insert(object1, object2, object3);
      expect(list.toString()).toEqual('abc,def,zebra');
    });
    it('should return an empty string when list is empty', function() {
      expect(list.toString()).toEqual('');
    });
  });
});