# Overview
Your assignment is to copy (as close as possible), the page held in https://homes.cs.washington.edu/~ffileas/DogWebsiteProject/

Here are some checkpoints to make sure that you are on the right track, go through this checklist as you start making the website:

1. Go to the website at https://homes.cs.washington.edu/~ffileas/DogWebsiteProject/ and get familiarized on what it does. The website essentially displays random dog pictures and specific breeds could be selected. A new image gets rendered everytime the user clicks the submit button.
2. Background color and margins correct
3. Picture of the cat is rendered with the correct size and radius
4. Select option present (actual dog breeds don't need to be options yet)
5. Submit button present
6. Fetch call succeeds (check by console.logging some information obtained from the call)
7. Options of all the breeds filled in the select tag
8. Able to obtain the value of the selected breed upon submission (check by console.logging corresponding value of selected option)
9. Able to display random dogs that don't have subbreeds (pug, shiba, samoyed)
10. Able to display random dogs that have subbreeds (yorkshire terrier, french bulldog, afghan hound)

With that said, here are some things to note: 
## HTML
1. The cat is Aimee's cat named mentos, the image is ./mentos.jpeg
2. Note that the bar that lets you select the dog breed is called a ```<select>``` tag. For example:

```html
<select>
	<option value="a">A</option>
	<option value="b">B</option>
	<option value="c">C</option>
</select>
```

The code above will render a select bar with options A, B, or C. Note that the "value" attribute within the option tags is arbitrary (you can name it whatever you want, but that is a value you can take in javascript)

*Hint: Even though the final website has lots of options, the HTML file itself actually only has 1 option (random option), the other options are rendered using JavaScript on page load*

## CSS
Background color: #BDB76B
Inner Box Background Color: #FFF8DC
Mentos image border radius: 50%
Dog image border radius: 20%

## Javascript
The bulk of this project is on Javascript so its good practice for doing DOM Manipulation, handling promises, and just general JS Syntax.

The API used for this project can be found in https://dog.ceo/dog-api/documentation/

Explore the available endpoints and its examples and see what you need. For reference:

---
To get all the dogbreeds I used:
https://dog.ceo/api/breeds/list/all

If you look at the response of this API, it returns a JSON object which has a message which is itself a JSON object.
The key value pair within the JSON object is

> breed : array of subbreeds

For example, an entry could be:
> "bulldog" : ["boston", "english", "french"]

Representing Boston Bulldog, English Bulldog, and French Bulldog.

Other entries might be:
> "pug" : []

Representing just pug (no subbreeds)

The information from this endpoint can be used to render the options list.

---
To get a random image from a specific breed **with no** sub-breed, I use:
https://dog.ceo/api/breed/{breedName}/images/random
> {breedName} being the name of the breed. eg. pug, hound, etc. 

Checkout the API in https://dog.ceo/dog-api/documentation/breed, it's the 3rd endpoint from the top (scroll down a bit)

To get a random image from a specific breed **with a** sub-breed, I use:
https://dog.ceo/api/breed/{breedName}/{subBreedName}/images/random 
> {breedName} being the name of the breed. eg. bulldog, terrier. {subBreedName} being the name of the corresponding sub-breed. eg. french, yorkshire.

Checkout the API in https://dog.ceo/dog-api/documentation/sub-breed, it's the 3rd endpoint from the top (scroll down a bit)

## Final Product
You should be creating index.html, index.js, and styles.css.

The git repository should contain index.html, index.js, styles.css, README.md, and mentos.jpeg.