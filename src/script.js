function diner(input, mainMenu, sideDish) {
  if (input == 'Jonathan') {
    prompt('What is your name')
    alert('Your name is Jonathan')
  } else {
    alert('entry not valid');
  };
  
  if (mainMenu == 'mainmenu') {
    prompt('Would you like to see a menu?')
    alert('pizza  $12.00')
    alert('burgers  $6.00')
    alert('barbeque  $13.50')
  } else {
    alert('entry not valid')
  };
  
  if (sideDish == 'sidemenu') {
    prompt('Here is a menu for your side dish.')
    alert('French fries $2.00')
    alert('onion rings $3.50')
    alert('baked potatoes $4.50')
  } else {
    alert('no valid entry');
  }
  
  const yourMainCourse = prompt('Choose your main course');
  let total = 3;
  
  if (yourMainCourse == 'pizza') {
    alert(`Your total is ${total * 12.00} dollars`)
  } else if (yourMainCourse == 'burgers') {
    alert(`Your total is ${total * 6} dollars`)
  } else if (yourMainCour == 'barbeque') {
    alert(`Your total is ${total * 13.50} dollars`)
  } else {
    alert('no valid entry')
  };
  
  const sideCourse = prompt('Choose your side?')
  
  if (sideCourse == 'French Fries') {
    alert(`Your total is ${total * 2.00} dollars`)
  } else if (sideCourse == 'onion rings') {
    alert(`Your total is ${total * 3.50} dollars`)
  } else if (sideCourse == 'baked potatoes') {
    alert(`Your total is ${total * 4.50} dollars`)
  } else {
    alert('no valid entry')
  };
  
  const fullCourseMeal = prompt('What is your Main and side dish');
  
  if (fullCourseMeal == 'pizza and onion rings') {
    alert(`Your total is ${total * 12.00 * 3.50} dollars`)
  } else if (fullCourseMeal == 'burgers and fries') {
    alert(`Your total is ${total * 6.00 * 2.00} dollars`)
  } else if (fullCourseMeal == 'barbeque and baked potatoes') {
    alert(`Your total is ${total * 13.50 * 4.50} dollars`)
  }
};

diner('Jonathan', 'mainmenu', 'sidemenu');