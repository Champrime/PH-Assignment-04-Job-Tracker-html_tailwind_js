#Assignment #4 - Job Tracker

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. getElementById:
   - Returns an element searching by the ID inputted.
   - It returns single element. Infact, there can be only one id under one name.
   - If no element is found, it returns null.

2. getElementsByClassName:
   - Returns collection of HTML elements named under this specific class name.
   - It returns multiple elements as the name "getElements" suggest.

3. querySelector / querySelectorAll:
   - querySelector returns single element like getElementByID the first element that matches a CSS selector.
   - querySelectorAll returns Nodelist. Everything in HTML represents a node, not even a whitespace excluded.
   - Unlike getElementById and getElementsByClassName, querySelector and querySelectorAll can use any CSS selector, which makes them versatile at times.
   - Have to use `#`, `.` in front of elmenets to adress the elements of id and class respectively. For tag name though, keep it as is.

### 2. How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM, I follow the following steps:

1. Create a new element using `document.createElement()`.

	```js
	const newComment = document.createElement('div');
	```

2. Set any attributes, classes, or content for the new element as needed.

	```js
	newComment.classList.add('my-class');
	newComment.innerText = 'This is a new element';
	```

3. Select the parent element where you want to insert the new element.

```js
const comments = document.getElementById('parent');
```

4. Append the new element to the parent element using `appendChild()` or `insertBefore()`.
	
	```js
	comments.appendChild(newComment);
	```

This will insert the new element before the reference element within the parent element.

### 3. What is Event Bubbling? And how does it work?

Event bubbling is a JS Concept where an event starts from the deepest target element and then propagates up through its parents and ancestor elements in the DOM tree. When an event occurs on an element, it first triggers any event handlers on that element, and then it "bubbles up" to its parent elements, triggering any event handlers on those parents as well, until it reaches the root of the document.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technic where an event listener is attached to a parent element instead of individual child elements. When an event occurs on a child element, it bubbles up to the parent, and the event handler on the parent executes.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

- `preventDefault()`: This method prevents the default action associated with an event from occurring. For example, if you have a link (`<a>`) and you call `preventDefault()` in its click event handler, it will prevent the browser from navigating to the link's URL.
- `stopPropagation()`: This method stops the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.

---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind)
- JavaScript (Vanilla)


--- 

1. GitHub Repository Link: [PH-Assignment-04-Job-Tracker-html_tailwind_js](https://github.com/Champrime/PH-Assignment-04-Job-Tracker-html_tailwind_js.git)
2. Live Site Link: [Live site](https://champrime.github.io/PH-Assignment-04-Job-Tracker-html_tailwind_js/)
