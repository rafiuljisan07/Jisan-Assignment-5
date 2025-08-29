**✅1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

Ans: The difference between **getElementById, getElementByClassName, and querySelector / querySelectorAll** is: 
<table border=1 width="100%" >
  <tr>
    <td>No.</td>
    <td>getElementById</td>
    <td>getElementsByClassName</td>
    <td>querySelector / querySelectorAll</td>
  </tr>
  <td>1.</td>
  <td>This property is used to get/catch/manipulate any html elements by there id.</td>
  <td>This property is used for get/catch/manipulate any html elements by their class name.</td>
  <td>These properties are used for get/catch/manipulate any html elements as like CSS.</td>
</table>

**✅2.How do you create and insert a new element into the DOM?**

Ans:
How I create and insert a new element into the DOM:

Firstly, I have to use this (createElement) DOM property to create any element. and then I have to input the tag name of the element I want to create.
<br>
(e.g.  `const child = document.createElement('div')`.

Secondly, I have to call/get the parentNode where I want to append the newly created element.
<br>
(e.g. `document.getElementByid('parent-container')`.

Lastly, I have to append the new element to the parentNode.
<br>
(e.g.  `document.getelementByid('parent-container').appendChild(child)`.

**✅3.What is Event Bubbling and how does it work?**

Ans: 
**Event Bubbling** is a concept in the **DOM (Document Object Model)**. Event Bubbling is a default behavior of events on elements.
In DOM, when you add **eventListener** to any html element, the event bubbles up or propagate to their parent element. Its continue propagating until it reaches to the root of the DOM.
<br>
suppose you have a html code like below,
```html
<body>
  <main>
    <section id="section">
       <div id="div">
          <button id="btn">Click Me</button>
      </div>
    </section>
  </main>
</body>
```
```js
document.getElementById('btn').addEventListener('click', function() {
  console.log('button clicked');
}
dvcument.getElementById('div').addEventListener('click', function() {
  console.log('div clicked');
}
dvcument.getElementById('section').addEventListener('click', function() {
  console.log('section clicked');
}
dvcument.getElementsByClassName('main').addEventListener('click', function() {
  console.log('main clicked');
}
dvcument.getElemenstByClassName('div').addEventListener('click', function() {
  console.log('body clicked');
}
```
When you will click the button.
The output will be like below,

```
button clicked
div clicked
section clicked
main clicked
body clicked
```

**This is how Event Bubbling works**

**✅4.What is Event Delegation in JavaScript? Why is it useful?**

Ans: Event Delegation is related with Event Bubbling. We know that, when we add event to any html element in DOM.
It bubbles up toword their parent>grand-parent>body and so on, it is called **Event Bubbling.**


Event Delegation: Instead of adding separete event listener to child elements, we can add a event listener to the parent element of child elements.
Event Delegation is a JavaScript technique, when we add a eventlistener to a parent element and do any event to child elements of that parent element,
then the event will go to the parent element by **Event Bubbling**.
And this is called **Event Delegation.**

**Event Delegition** is very useful. Because when we have to deal with so many events we can presize our code by using **Event Delegation.**<br>
👉By using this method we can simplify our code.<br>
👉It improves performance. Because, Event Delegation presize our code.

**✅5.What is the difference between preventDefault() and stopPropagation() methods?**

Ans: The difference between **preventDefault()** and **stopPropagation()** methods is:
<table border=1 width="100%" >
  <tr>
    <td>preventDefault</td>
    <td>stopPropagation</td>
  </tr>
  <tr>
    <td>It stops the default behavior of any elements</td>
    <td>It stops propagation of event bubbling/event capturing</td>
  </tr>
  <tr>
    <td>e.g. stops reload behavior of form button</td>
    <td>e.g. stops event bubbling, so event can not go to parent element</td>
  </tr>

