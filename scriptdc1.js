const quizData = [
    {
      question: "Que.1 Which of the following is NOT a method of digital transmission of analog signals?",
      options: ["A) Pulse Code Modulation (PCM)", "B) Amplitude Modulation (AM)", "C) Delta Modulation (DM)", "D) Adaptive Delta Modulation (ADM)"],
      answer: "B) Amplitude Modulation (AM)"
    },
     {
      question: "Que.2 According to the Nyquist theorem, the minimum sampling rate must be:",
      options: ["A) Equal to the signal frequency", "B) Twice the maximum frequency of the signal", "C) Half the signal frequency", "D) Four times the maximum frequency"],
      answer: "B) Twice the maximum frequency of the signal"
    },
     {
      question: "Que.3 What is the first step in converting an analog signal to digital using PCM?",
      options: ["A) Quantization", "B) Encoding", "C) Sampling", "D) Modulation"],
      answer: "C) Sampling"
    },
     {
      question: "Que.4 In Pulse Code Modulation, the process of converting the sampled values into discrete levels is known as:",
      options: ["A) Sampling", "B) Quantization", "C) Modulation", "D) Demodulation"],
      answer: "B) Quantization"
    },
     {
      question: "Que.5 What is the main disadvantage of delta modulation?",
      options: ["A) High bandwidth requirement", "B) Complex encoding", "C) Slope overload distortion", "D) Aliasing"],
      answer: "C) Slope overload distortion"
    },
     {
      question: "Que.6 Adaptive Delta Modulation improves the performance of:",
      options: ["A) Amplitude Modulation", "B) Basic Delta Modulation", "C) PCM", "D) Frequency Modulation"],
      answer: "B) Basic Delta Modulation"
    },
     {
      question: "Que.7 In PCM, the number of quantization levels determines the:",
      options: ["A) Sampling rate", "B) Number of samples per second", "C) Number of bits per sample", "D) Transmission bandwidth"],
      answer: "C) Number of bits per sample"
    },
     {
      question: "Que.8 Which of the following is true for quantization noise?",
      options: ["A) It decreases with more quantization level", "B) It increases with more quantization levels", "C) It is independent of bit rate", "D) It only occurs in analog transmission"],
      answer: "A) It decreases with more quantization level"
    },
    {
      question: "Que.9 The bandwidth required for PCM transmission is directly proportional to:",
      options: ["A) Sampling rate only", "B) Bit depth only", "C) Product of sampling rate and number of bits per sample", "D) Carrier frequency"],
      answer: "C) Product of sampling rate and number of bits per sample"
    },
    {
      question: "Que.10 Which component of a PCM system is responsible for converting digital data into an analog waveform for transmission?",
      options: ["A) Sampler", "B) Quantizer", "C) Encoder", "D) Modulator"],
      answer: "D) Modulator"
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