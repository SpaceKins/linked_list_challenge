/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
 function linkedListGenerator(){

//    var linkedList=null;
    var headNode=null;
    var tailNode=null;
    var nodeCount=0;


    var returnElements={
        getHead:getHead
        ,getTail:getTail
        ,add:add
        ,get:get
        ,remove:remove
        ,insert:insert
    }

    function getHead()
    {
        return headNode;
    }

    function getTail()
    {
        nodeCount=0;
        var thisNode=headNode;
        if(thisNode==null)
        {
            return null;
        }

        while(thisNode.next!=null)
        {
            thisNode=thisNode.next;
            nodeCount++;
        }
        return thisNode;
    }

    function add(value)
    {
        var newNode={value:value,next: null};
        if(headNode==null)
        {
          //  linkedList=newNode;
            headNode=newNode;
            tailNode=newNode;
        }
        else
        {
            tailNode.next=newNode;
            tailNode=newNode;
        }

        nodeCount++;
        return newNode;
    }

    function get(Number)
/*
Takes in a Number value and searches for the Nth node in a list and returns that node

linkedListExample.get(2); // returns a node object...
*/
{
 // value: 'Neuromancer',
 // next: { ... }
 var getIndex=0;
 var returnThisNode=headNode;

 while((getIndex!=Number) && (returnThisNode!=null))
 {
    returnThisNode=returnThisNode.next;
    getIndex++;
}

return (returnThisNode==null)?false:returnThisNode;
}

function remove(Number)
/*
Takes in a Number value and searches for the Nth node removes it from the list. Should return false if the the position is outside the length of the list.

linkedListExample.remove(3);
*/
{
   var getIndex=0;
   var returnThisNode=headNode;
   var previousNode=headNode;
   var found=false;

   if(Number==0)
   {
    headNode=headNode.next;
}
    //(getIndex<(Number)) &&

    while( (returnThisNode!=null) && !(found))
    {
        if(getIndex==(Number-1))
        {
            previousNode=returnThisNode;
        }

        if(getIndex==Number)
        {
            previousNode.next=returnThisNode.next;
            found=true;
        }
        returnThisNode=returnThisNode.next;             
        getIndex++;
    }

    if(found)
    {
        tailNode=getTail();
    }
    else
    {      
        return found;
    }
}

function insert(Value, Number)
{
    var setThisIndex=0;
    if(Number>(nodeCount-1) || (Number<0) || Number == undefined)
    {
        return false;   
    }

    var thisNode=headNode;
    var continueSearch=true;
    var insertNode={value:Value}

    if(Number==0)
    {
        insertNode.next=thisNode;
        headNode=insertNode;
        nodeCount++;
        continueSearch=false;
    }

    while((setThisIndex<Number) && continueSearch)
    {
        if(setThisIndex==(Number-1))
        {
            insertNode.next=thisNode.next;
            thisNode.next=insertNode;           
            continueSearch=false;
        }

        thisNode=thisNode.next;
    }
    nodeCount++;
}

return returnElements;

};

/*

console.log(linkedListGenerator());
var testAdd=linkedListGenerator().add;

console.log(testAdd("test"));
*/

var test=linkedListGenerator();
test.getTail();

console.log(test.add("news.ycombinator.com"));
console.log(test.add("mozilla.org"));
console.log(test.add("eff.org"));
console.log(test.add("icann.org"));


console.log(test.remove(2));
console.log(test.remove(2));
console.log(test.get(2));


var test2=linkedListGenerator();
test2.add('Neuromancer');
test2.add('Snow Crash');
test2.insert('Ready Player One', 0);


var test3=linkedListGenerator();
test3.add('news.ycombinator.com');
test3.add('icann.org');
test3.insert('mozilla.org', 1);
test3.insert('devleague.com', 1);

/*
console.log(test.remove(9));
console.log(test.remove(4));
*/

/*
'news.ycombinator.com',
        'mozilla.org',
        'eff.org',
        'icann.org'

        */
