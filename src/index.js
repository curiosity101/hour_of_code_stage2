function nameChanged() {
  /* 
    This is an Array - An Array is a list of things that are seperated by commas. You can reconise an Array by the [] that 
    surrounds the list of things. Each thing in this array is a name, each name is made up of text and therefore it is 
    classed as a String. You can tell they are strings because each name is surrounded by "" This array is an array of all 
    of the possible elf names our app can return. We have stored it in a variable called 'elfFirstNames' ready for us to use 
    later.
  */
  
  let elfFirstNames = [
    "Tinsel",
    "Snowball",
    "Candy",
    "Pine",
    "Pinky",
    "Jingle",
    "Twinkle"
  ];
  
  /* 
    -- ADDITIONAL TASK: Create an array of elf surnames --
    The coders could move on to create a second array of names, and then extend their form to create 
    elfNames that have both a first and last name
    
    Here is an example to get you going:
    let elfLastNames = [
      "Sprout",
      "McStuffing"
    ];
  */

  
  /*
    This code will find the text input on the page and get the current value of it. ie. Whatever has been typed into it. 
    It then stores it in a variable called 'enteredName' ready for us to use later.
  */
  let enteredName = document.getElementById("enteredName").value;

  /*
    -- ADDITIONAL TASK: Split the input text --
    Find a way to split up the input text. Chances are the user has inputed their full name with a single space between 
    first name and last name eg.'John Smith'. So you could try splitting the text apart on the space.
    
    Here is an example of how you could do it
    let seperatedEnteredName = enteredName.split(" ");
  */
  
  /*
    -- ADDITIONAL TASK: Create variables to store the first and last name --
    If you want to have a different first and last name then you'll need to store that somewhere so you can refer to it later.
    Normally you will create a variable but not set it to anything, ready to use later.
    
    Eg.
    let firstName = "";
    let lastName = "";
  */

  /* 
    -- ADDITIONAL TASK: Store the first name and last name for later use --
    'if' is a keyword, keywords are words that are reserved by the coding language and assigned a specific task. 
    'if' has the task of checking the value that is provided in the () is true or not. If the value is true then it will 
    run any code inside of the next {}
  
    
    if (enteredName) {
      // Select & store the firstName
      firstName = seperatedEnteredName[0];
      // Check if there is a lastName in the array - ['firstName', 'lastName', 'other..']
      if (seperatedEnteredName.length > 1) {
        // Select & store the lastName
        lastName = seperatedEnteredName[1];
      }
    }
  
  */

  // Create the elfName variable, ready to use later
  let elfName = "";

  /* 
    Here we store the length of the name the user typed into the input. The length is referring to how many letters are 
    in the name
    
    Don't forget to change this and do it for the first and second name if you do the additional tasks
    eg.
      let firstNameLength = firstName.length;
      let lastNameLength = lastName.length;
  */
  let firstNameLength = enteredName.length;

  /* 
    'if' is a keyword, keywords are words that are reserved by the coding language and assigned a specific task. 
    'if' has the task of checking the value that is provided in the () is true or not. If the value is true then it will 
    run any code inside of the next {}
    
    In this case we're checking to see if the first name has one or more letter in it
    If we didn't do this check and just assumed that the user had typed something into the text input, what would happen?
  */
  if (firstNameLength > 0) {
    // Find the elf first name & store it in elfName
    elfName += elfFirstNames[firstNameLength - 1];
  }
  /*
    -- ADDITIONAL TASK: Fix the bug --
    There is a bug in the block of code above. If your name is longer than the number of elf names in your array, what
    happens?
    
    Can you fix it?
  */

  /*
    -- ADDITIONAL TASK: Store the first name and last name for later use --
   
    if (lastNameLength) {
      // Find the elf last name & add it to the end of elfName with a space
      elfName += " " + elfLastNames[lastNameLength - 1];
    }
  */

  // Find the HTML div with id 'elfName' & put the elfName text inside
  document.getElementById("elfName").innerHTML = "Elf name: " + elfName;
};
