const quizData = [
    {
      question: "Que.1 Which of the following is used to combine multiple digital signals into one?",
      options: ["A) Demultiplexer", "B) Decoder", "C) Multiplexer", "D) Encoder"],
      answer: "C) Multiplexer"
    },
     {
      question: "Que.2 In Time Division Multiplexing (TDM), time slots are assigned to each signal:",
      options: ["A) Based on frequency", "B) Randomly", "C) In a sequential manner", "D) Using voltage levels"],
      answer: "C) In a sequential manner"
    },
     {
      question: "Que.3 What is the primary purpose of a scrambler in digital transmission?",
      options: ["Amplify the signal", "B) Increase signal speed", "C) Prevent long sequences of identical bits", "D) Compress the data"],
      answer: "C) Prevent long sequences of identical bits"
    },
     {
      question: "Que.4 Which of the following digital line coding formats uses a transition in the middle of the bit period to indicate data?",
      options: ["A) NRZ", "B) RZ", "C) Manchester", "D) AMI"],
      answer: "B) Manchester"
    },
     {
      question: "Que.5 Inter-symbol interference (ISI) occurs due to:",
      options: ["A) Noise in the channel", "B) Delay in multiplexing", "C) Bandwidth limitations causing overlapping of symbols", "D) Clock mismatch"],
      answer: "C) Bandwidth limitations causing overlapping of symbols"
    },
     {
      question: "Que.6 Which type of synchronization ensures proper alignment of bit timing between transmitter and receiver?",
      options: ["A) Frame Synchronization", "B) Byte Synchronization", "C) Bit Synchronization", "D) Pulse Synchronization"],
      answer: "C) Bit Synchronization"
    },
     {
      question: "Que.7 What is the main function of an equalizer in digital communication?",
      options: ["A) Add noise to the signal", "B) Adjust signal strength", "C) Remove ISI from the signal", "D) Increase the bandwidth"],
      answer: "C) Remove ISI from the signal"
    },
     {
      question: "Que.8 What is the key difference between SDH and PDH multiplexing hierarchies?",
      options: ["A) SDH uses analog signals", "B) PDH is fully synchronous", "C) SDH allows precise synchronization between multiplexed signals", "D) PDH supports higher data rates"],
      answer: "C) SDH allows precise synchronization between multiplexed signals"
    },
    {
      question: "Que.9 Which technique is typically used to achieve frame synchronization?",
      options: ["A) Modulation", "B) Adding parity bits", "C) Inserting a known bit pattern (sync word)", "D) Using error-correcting codes"],
      answer: "C) Inserting a known bit pattern (sync word)"
    },
    {
      question: "Que.10 A linear feedback shift register (LFSR) is commonly used in:",
      options: ["A) Equalization", "B) Multiplexing", "C) Scrambling", "D) Synchronization"],
      answer: "C) Scrambling"
    },
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();