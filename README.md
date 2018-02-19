# Bonify-Challenge
Senior Frontend Engineer Challenge

##### Question 1 (Level	1)	(15	mins)
What	are	your	thoughts	about	advantages	and	disadvantages	of	using	CSS	in	JS	approach?

Approaching CSS in JS was not there as a default practice or how styling the elements should be.

Approaching CSS in JS came up because of the need for applying some styles dynamically and conditionally.

Of course, when CSS3 came it offered many alternative options and new features helping us getting the same results we were trying to get by approaching CSS in JS.

But still, not enough.

so based on that level of needs (styling dynamically and conditionally) the advantage was that we got what we need.

the advantages of approaching CSS in JS this way was only that we got what we needed. meaning styling dynamically and conditionally.

and the ways I think everyone followed is updating the "style" property of a DOM element either by native javascript or jQuery.

meaning it was only inline style. which does not really give us all features that we can achieve using CSS. like accessing element states ": hover, : active, : focus .. " or pseudo selectors ":before, :after" and controlling the media query types and sizes.

and across the time. as the website started to be more like application. it terms of being big and complex.

turned out handling approaching CSS in JS that way was a really bad idea.

so with the ongoing need of applying styles dynamically and conditionally and getting to know that applying inline styles wasn't really a good idea, we moved on to two ways to get what we need to be done in better way.

1: is by dynamically and conditionally control the class names of the dom elements and keep all the styles we need in the CSS file in case any element got a class name that match. as an example: 

/.styles.css

    .btn {
        border: none;
        outline: none;
    }

    .btn-danger {
        border: none;
        outline: none;
        color: red;
    }

and we can control the class name of the element to be "btn" or "btn-danger" by JS, updating the class name attribute of the targeted element.

and the community got caught up by this for a while starting with such simple practice moving forward to invent CSS methodologies by following some rules and guidelines to keep styles as modular as it could be.

like OOCSS and BEM.

I won't dive into more details about those as it is not the subject but,

speaking of modularity, I think that was the most important reason for why such methodologies weren't enough.

2: is by dynamically and conditionally control the generated styles and gets it attached to the DOM.

so as well we could've accomplished that using the native JS right away. but for the sake of keeping things organized and assert the code scalability and readability.
like JSS, styled-component, and others.

and here I can list some

#### Advantages:

1: ISOLATION. as I mentioned before. I think that is the most important reason behind this is modularity.
we have never been able to achieve such abstraction before. in the ordinary way of writing CSS. elements used to have access to all the other styles. any element can access any styles on the sheet. as an example:

    div {
        color: red;
    }
    .me {
       color: black;
    }
    
    <div>parent</div>
    <div class="me">child</div>

the element "div" with class "me" will always have the style of "color: red" not because just of the inheritance in CSS, but as well because of the getting both caught by the "div" selector.

even when we managed to get over this by avoiding targeting element's by name and start to target by class names like in CSS methodologies, we couldn't fix the inheritance thing. because a child will always get the parent styles and we can only overwrite it.

2: see things as Component.
in modern web frameworks. like React, angular.. the apps went based on components. components that we can use as many as we want where ever we want.
let's say we have an ImageCard component. we don't need to take care of all elements in the component as we are and will use them in and only in a component.
I can include the ImageCard on a home page or player story. it will always behave same as it fully abstracted.

3: Reuse and share.
we never had a chance before to share or reuse our code to generate or handle generating some styles.

4: TESTING.
I think this could be the second best advantage of applying CSS using js. is to test it as a unit.

5: Code Optimizing.
I think we could not have such a code analyzer while writing CSS as good as we do have now in js.
meaning taking care of the unused code.

6: No more over thinking of a class name.
My favorite advantage. as I am one of those who used to spend more time on picking the right unique meaningful class name than writing the styles itself.


#### Disadvantages:

*   It might increase the render blocking js.
    Browsers by default, think of CSS as render blocking. and by generating the CSS by the JS we might come to block rendering the page even a bit more.

*   More Learning,
    as this never been the way CSS meant to be written in. we came to face that new way of applying CSS and maybe new syntax like the on in "styled-component"
    
*   More Libraries,
    yea more tools to include is a must.

*   Linting.
    we used to have file ext. based auto complete and corrector.
    while writing CSS in js we can't expect to get that much help from linters outthere or the code editor.
    
    
    
##### Question	2 (Level	2)	(45	mins)
Given	the	applicationData	structure	below	please	extract	the	values	while	keeping	the	structure.	The	expected	output	is	in	a	variable	below	es6	is	encouraged	and	allowed,	only	latest	Chrome	is	required	to	run	the	solution.	

    https://jsfiddle.net/8vhwhvjt/
    
#### solution
    const applicationData = { 
    	childrenInHousehold: { confidence: 0, value: 0 },
      country: { confidence: 1, value: 'DE' },
      zipCode: { confidence: 1, value: '12049' },
      propertyValueRange: { confidence: 1, value: 200000 },
      propertyPayment: { confidence: 1, value: 4567 },
      birthCountry: { confidence: 1, value: 'AW' },
      'collection-ibanOrAccountNumber': { confidence: 1, value: 'DE12345432345432343342' },
      'collection-accountId': { confidence: 1, value: 5397615 },
      nameOfEmployer: { confidence: 1, value: 'Forteil' },
      typeOfEmployment: { confidence: 1, value: 1 },
      firstName: { confidence: 1, value: 'John' },
      numberOfOtherIncomeSources: { confidence: 1, value: 1 },
      nationality: { confidence: 1, value: 'DE' },
      typeOfHousehold: { confidence: 1, value: 1 },
      lifeInsurance: { confidence: 0, value: null },
      familyStatus: { confidence: 1, value: 1 },
      lastName: { confidence: 1, value: 'Smith' },
      role: { confidence: 1, value: '1' },
      gender: { confidence: 1, value: 1 },
      city: { confidence: 1, value: 'Berlin' },
      leasingRates: { confidence: 0, value: null },
      houseNumber: { confidence: 1, value: '32' },
      title: { confidence: 1, value: 2 },
      employmentSector: { confidence: 1, value: 5 },
      existingCredits: { confidence: 1, value: [{
                    "remainingAmount": {
                        "confidence": 1.0,
                        "value": 12345.0
                    },
                    "totalLoanAmount": {
                        "confidence": 1.0,
                        "value": 234.0
                    },
                    "monthlyLoanRate": {
                        "confidence": 1.0,
                        "value": 234.0
                    },
                    "creditTransfer": {
                        "confidence": 0.0,
                        "value": false
                    },
                    "creditType": {
                        "confidence": 1.0,
                        "value": 2
                    }
                }, {
                    "remainingAmount": {
                        "confidence": 1.0,
                        "value": 2344.0
                    },
                    "totalLoanAmount": {
                        "confidence": 1.0,
                        "value": 4322345.0
                    },
                    "monthlyLoanRate": {
                        "confidence": 1.0,
                        "value": 5432.0
                    },
                    "creditType": {
                        "confidence": 1.0,
                        "value": 2
                    }
                }] },
      rentIncome: { confidence: 0, value: null },
      endOfWorkPermit: { confidence: 0, value: null },
      street: { confidence: 1, value: 'Alexanderplatz' },
      typeOfResidence: { confidence: 1, value: 1 },
      intendedUse: { confidence: 1, value: 3 },
      email: { confidence: 1, value: 'johnsmith@bonify.de' },
      buildingSavingsContracts: { confidence: 0, value: null },
      monthlyIncome: { confidence: 1, value: 318 },
      'collection-bankName': { confidence: 1, value: 'Deutsche Bank' },
      birthDate: { confidence: 1, value: 405734400000 },
      employmentSince: { confidence: 1, value: 1444176000000 },
      oldAgePension: { confidence: 1, value: 1234 } 
    };
    
    const expectedFormValues = { 
      childrenInHousehold: 0,
      country: 'DE',
      zipCode: '12049',
      propertyValueRange: 200000,
      propertyPayment: 4567,
      birthCountry: 'AW',
      'collection-ibanOrAccountNumber': 'DE12345432345432343342',
      'collection-accountId': 5397615,
      nameOfEmployer: 'Forteil',
      typeOfEmployment: 1,
      firstName: 'John',
      numberOfOtherIncomeSources: 1,
      nationality: 'DE',
      typeOfHousehold: 1,
      lifeInsurance: null,
      familyStatus: 1,
      lastName: 'Smith',
      role: '1',
      gender: 1,
      city: 'Berlin',
      leasingRates: null,
      houseNumber: '32',
      title: 2,
      employmentSector: 5,
      existingCredits: 
       [ { remainingAmount: 12345,
           totalLoanAmount: 234,
           monthlyLoanRate: 234,
           creditTransfer: false,
           creditType: 2 },
         { remainingAmount: 2344,
           totalLoanAmount: 4322345,
           monthlyLoanRate: 5432,
           creditType: 2 } ],
      rentIncome: null,
      endOfWorkPermit: null,
      street: 'Alexanderplatz',
      typeOfResidence: 1,
      intendedUse: 3,
      email: 'johnsmith@bonify.de',
      buildingSavingsContracts: null,
      monthlyIncome: 318,
      'collection-bankName': 'Deutsche Bank',
      birthDate: 405734400000,
      employmentSince: 1444176000000,
      oldAgePension: 1234
    };
    
    function reduceAndReturn(item) {
        const result = Object.keys(item).reduce((a,i) => {
            a[i] = item[i].value
            return a;
        }, {});
        return result;
    }
    
    function normalize(data) {
        //implementation goes here
        const result = Object.keys(data).reduce((acc, item) => {
            const valueToAssert = data[item].value
            if (Array.isArray(valueToAssert)) {
                acc[item] = valueToAssert.map(reduceAndReturn);
            } else {
                acc[item] = valueToAssert;
            }
            return acc;
        }, {});
        return result;
    }
     
    expect(normalize(applicationData)).toEqual(expectedFormValues)
    
##### Question	2 (Level 2)	(45	mins)
Please build an	application	that uses the Google	Maps API and Youtube API to	grab and display the latest	videos by a location defined on	the	map, and allow the user	to Like	any	number	of	those videos. Please make any assumptions on	your own and feel free to simplify or make the solution more complex.	Please write your assumptions if	taken. Expected	result:	running	web	application, preferably in	React.

    yarn install
    npm start

Navigate to 
    
    http://localhost:3000
    
