describe('Linked List', function() {
  let list;
  beforeEach(function() {
    list = new LinkedList();
  });

  describe('Insert method', function() {
    it('Insert Object With Key abc Correctly', function() {
      let object = { key: 'abc'};
      list.insert(object);
      expect(list.contains(object.key)).toEqual(true);
      expect(list.size()).toEqual(1);
    });
    it('sorts list as inserts', function() {
      let object1 = { key: 'i' };
      let object2 = { key: 'b' };
      let object3 = { key: 'c' };
      let object4 = { key: 'p' };
      let object5 = { key: 'q' };
      list.insert(object1, object2, object3, object4, object5);
      list.remove('9');
      list.remove('p');
      expect(list.size()).toEqual(4);
      expect(list.toString()).toEqual('b,c,i,q');
    });
    it('it should ignore object with empty key', function(){
      let object = {};
      list.insert(object);
      expect(list.size()).toEqual(0);
    })
  });
  describe('Remove method', function(){
    it('should remove list item by key', function(){
      let object = { key: 'abc'};
      list.insert(object);
      expect(list.contains(object.key)).toEqual(true);
      list.remove(object.key);
      expect(list.size()).toEqual(0);
      expect(list.contains(object.key)).toEqual(false);//aw yeah
    });
    it ('should add mult obj and remove one', function(){
      let object1 = {key: 'abc'};
      let object2 = {key: 'bbbb'};
      let object3 = {key: 'ccc'};
      list.insert(object1, object2, object3);
      expect(list.size()).toEqual(3);
      list.remove(object2.key);
      expect(list.size()).toEqual(2);
      expect(list.contains(object2.key)).toEqual(false);
      expect(list.toString()).toEqual('abc,ccc');
    })
  });
});
