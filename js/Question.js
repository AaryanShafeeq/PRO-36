class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    //Create a input box to enter the number
    this.input2 = createInput("Enter Your Answer Number");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3');

    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');

    this.message = createElement("h2")
  }

  hide() {
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display() {
    this.title.html("My Quiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("What is the Capital of Australia?");
    this.question.position(150, 100);

    this.option1.html("1:Gympie");
    this.option1.position(150, 120);

    this.option2.html("2:Canberra");
    this.option2.position(150, 140);

    this.option3.html("3:Sydney");
    this.option3.position(150, 160);

    this.option4.html("4:New Guinea");
    this.option4.position(150, 180);

    this.input1.position(150, 250);
    this.input2.position(400, 250);

    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(() => {
      this.message.html("Thank you for submitting your answer");
      this.message.position(150, 300);
    })


  }
}
