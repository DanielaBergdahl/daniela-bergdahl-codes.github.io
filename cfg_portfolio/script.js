function sayHello() {
  const name = prompt("What is your name?");
  alert("Hello, " + name + "! Welcome to my website");
  }

  sayHello();

  function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    alert("You have rollet a " + dice + "!" );
  }

  function jobSearch() {
    let months =0;
    let dice = Math.floor(Math.random() * 6) + 1;
    months += dice;
    alert("It will take you " + months + "months to get your first developer job");
  }

  jobSearch();

  function comfortLevel (html, css, js) {
    const average = (html + css + js) / 3;
    if (average >= 7) {
        console.log("You are a pro!");
    } else if (average >=4) {
        console.log("Dont worry youre nearly there!");
    } else {
      console.log("If you keep trying you will get there!");
    }
  }
  comfortLevel(5, 6, 7);

  function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color ="white";
    document.body.style.backgroundImage = "none";
    document.getEleme

  }