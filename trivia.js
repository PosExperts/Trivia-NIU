window.onload = function() {
    var container = document.createElement("div");
    container.className = "trivia-container";
    document.body.appendChild(container);
    
    function calculateContainerSize() {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
    
        // Calculate container height and width based on aspect ratio
        var containerHeight = windowHeight * 0.8; // Set container height to 80% of window height
        var containerWidth = containerHeight * (9 / 16); // Maintain 9:16 aspect ratio
    
        // Check if container width exceeds window width
        if (containerWidth > windowWidth) {
            // If so, recalculate width based on window width
            containerWidth = windowWidth * 0.8; // Set container width to 80% of window width
            containerHeight = containerWidth * (16 / 9); // Maintain 9:16 aspect ratio
        }
    
        // Set container dimensions
        container.style.width = containerWidth + "px";
        container.style.height = containerHeight + "px";
    }
    
    calculateContainerSize();
    
    window.addEventListener("resize", function() {
        calculateContainerSize();
    });


    var score = 0; // Variable to store the score
    var askedQuestions = []; // Array to store asked questions

    // Define an array of questions and their respective answers
    var questions = [
        {
            question: "¿Adónde puedo descargar NIU App?",
            answers: ["Play Store", "App Store", "App Gallery", "Todas las anteriores"],
            correctAnswerIndex: 3
        },
        {
            question: "¿Se puede abrir una cuenta de ahorro 100% digital totalmente gratis en NIU App?",
            answers: ["SI", "NO"],
            correctAnswerIndex: 0
        },
        {
            question: "¿Puedo solicitar una tarjeta de débito de NIU hasta la puerta de mi casa o trabajo?",
            answers: ["SI", "NO"],
            correctAnswerIndex: 0
        },
        {
            question: "¿Qué servicios básicos puedo pagar en NIU App?",
            answers: ["Luz", "Agua","Telefono", "Todas las anteriores"],
            correctAnswerIndex: 3
        },
        {
            question: "¿Puedo cobrar mis remesas en NIU App?",
            answers: ["Si, puedo cobrar mis remesas de 8 o 13 dígitos.", "No"],
            correctAnswerIndex: 0
        },
        {
            question: "Envió dinero a mis amigos y familiares solo con su número de teléfono.",
            answers: ["Verdadero", "Falso"],
            correctAnswerIndex: 0
        },
        {
            question: "¿Puedo hacer envíos de dinero de banco a banco con NIU App?",
            answers: ["Si", "No"],
            correctAnswerIndex: 0
        },
        {
            question: "¿Al referir a tus amigos a NIU App quien recibe un incentivo de $2.00?",
            answers: ["Yo", "Mis amigos","Ambos"],
            correctAnswerIndex: 2
        },
        {
            question: "¿Cómo recargo mi cuenta NIU?",
            answers: ["Con otras tarjetas", "Con transferencia de otras cuentas","Con efectivo","Todas las anteriores"],
            correctAnswerIndex: 3
        },
        {
            question: "¿Adónde puedo hacer retiros de efectivo con mi NIU App? ",
            answers: ["En cajeros de Banco Cuscatlan", "En puntos Xpress","En puntos Aki Pago","Todas las anteriores"],
            correctAnswerIndex: 3
        },


        // Add more questions as needed
    ];
    
    // boton_inicio
    var boton_inicio = document.createElement("button");
    boton_inicio.className = "boton_inicio";
    boton_inicio.innerText = "INICIAR";
    boton_inicio.style.position = "fixed";
    boton_inicio.style.top = "60%";
    boton_inicio.style.left = "50%";
    boton_inicio.style.transform = "translate(-50%, -50%)";
    boton_inicio.style.fontSize = "3vw";
    container.appendChild(boton_inicio);

    

    // boton_x
    var boton_x = document.createElement("button");
    boton_x.className = "boton_x";
    boton_x.innerText = "X";
    boton_x.style.position = "fixed";
    boton_x.style.top = "5%";
    boton_x.style.left = "10%";
    boton_x.style.transform = "translate(-50%, -50%)";
    boton_x.style.display = "none";
    boton_x.style.fontSize = "60px";

    container.appendChild(boton_x);

    function adjustButtonXSize() {
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        var scaleFactor = Math.min(screenWidth / 1080, screenHeight / 1920);
        var maxFontSize = 60;
        var adjustedFontSize = Math.floor(maxFontSize * scaleFactor);
        
        // Adjust font size
        boton_x.style.fontSize = adjustedFontSize + "px";
      
        // Adjust button size
        boton_x.style.width = (adjustedFontSize * 1.25) + "px"; // Adjust as needed
        boton_x.style.height = (adjustedFontSize * 1.25) + "px"; // Adjust as needed
      }
      
      // Call the function initially and whenever the window is resized
      adjustButtonXSize();
      window.addEventListener('resize', adjustButtonXSize);


    // caja_preguntas
    var caja_preguntas = document.createElement("img");
    caja_preguntas.className = "caja_preguntas"; // Remove extra space in class name
    caja_preguntas.src = "Imagenes/caja_preguntas.png";
    caja_preguntas.style.position = "absolute";
    caja_preguntas.style.top = "30%";
    caja_preguntas.style.left = "50%";
    caja_preguntas.style.transform = "translate(-50%, -50%)"; // Center the image horizontally and vertically
    caja_preguntas.style.maxWidth = "90%";
    caja_preguntas.style.display = "none";
    container.appendChild(caja_preguntas);

    // logo_inicio
    var logo_inicio = document.createElement("img");
    logo_inicio.className = "logo_inicio";
    logo_inicio.src = "Imagenes/Logo_inicio.png";
    logo_inicio.style.position = "absolute";
    logo_inicio.style.top = "45%";
    logo_inicio.style.left = "50%";
    logo_inicio.style.transform = "translate(-50%, -50%)";
    logo_inicio.style.maxWidth = "40%";
    container.appendChild(logo_inicio);

    // logo_final
    var logo_final = document.createElement("img");
    logo_final.className = "logo_final";
    logo_final.src = "Imagenes/logo_final.png";
    logo_final.style.position = "absolute";
    logo_final.style.bottom = "30%";
    logo_final.style.left = "50%";
    logo_final.style.maxWidth = "45%";
    logo_final.style.transform = "translateX(-50%)";
    logo_final.style.display = "none";
    container.appendChild(logo_final);

    var scoreText1 = document.createElement("div");
    scoreText1.className = "score";
    scoreText1.style.position = "absolute";
    scoreText1.style.textAlign = "center";
    scoreText1.style.top = "37%";
    scoreText1.style.left = "50%";
    scoreText1.style.transform = "translate(-50%, -50%)";
    scoreText1.style.display = "none";
    scoreText1.style.fontSize ="8vw";
    container.appendChild(scoreText1);

    var scoreText2 = document.createElement("div");
    scoreText2.className = "score";
    scoreText2.innerText = "PUNTOS";
    scoreText2.style.position = "absolute";
    scoreText2.style.textAlign = "center";
    scoreText2.style.top = "45%";
    scoreText2.style.left = "50%";
    scoreText2.style.transform = "translate(-50%, -50%)";
    scoreText2.style.display = "none";
    scoreText2.style.fontSize ="3vw";
    container.appendChild(scoreText2);

    var End_Text = document.createElement("div");
    End_Text.className = "End_Text";
    End_Text.innerText = "FELICIDADES TIENES";
    End_Text.style.textAlign = "center";
    End_Text.style.position = "absolute";
    End_Text.style.top = "25%";
    End_Text.style.left = "50%";
    End_Text.style.transform = "translate(-50%, -50%)";
    End_Text.style.display = "none";
    End_Text.style.fontSize = "40px";
    container.appendChild(End_Text);

    var resetButton = document.createElement("button");
    resetButton.className = "boton_reinicio";
    resetButton.innerText = "REINICIAR!";
    resetButton.style.position = "absolute";
    resetButton.style.bottom = "20%";
    resetButton.style.left = "50%";
    resetButton.style.transform = "translateX(-50%)";
    resetButton.style.display = "none";
    resetButton.style.fontSize = "3vw";
    container.appendChild(resetButton);

    boton_inicio.addEventListener('click', function() {
        logo_inicio.style.display = "none";
        boton_inicio.style.display = "none";
        container.style.backgroundImage = "url(Imagenes/BG1.png)";
        caja_preguntas.style.display = "block";
        boton_x.style.display = "block";


        // Select a question that has not been asked yet
        var unansweredQuestions = questions.filter(function(question) {
            return askedQuestions.indexOf(question) === -1;
        });

        if (unansweredQuestions.length === 0) {
            // Show score and reset button
            scoreText1.innerHTML = score;
            scoreText1.style.display = "block";
            scoreText2.style.display = "block";
            End_Text.style.display = "block";
            resetButton.style.display = "block";
            boton_x.style.display = "block";
            logo_final.style.display = "block";


            // Hide final elements
            container.style.backgroundImage = "url(Imagenes/BG1.png)";
            caja_preguntas.style.display = "none";

            // Remove all questions and answer buttons
            var questionElements = document.querySelectorAll(".question");
            questionElements.forEach(function(element) {
                container.removeChild(element);
            });

            var answerButtons = document.querySelectorAll(".answer-button");
            answerButtons.forEach(function(button) {
                container.removeChild(button);
            });

            // Reset asked questions and score
            askedQuestions = [];
            score = 0;
        } else {
            var randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
            var selectedQuestion = unansweredQuestions[randomIndex];
            
            // Display the selected question
            var questionElement = document.createElement("div");
            questionElement.className = "question";
            questionElement.innerText = selectedQuestion.question;
            questionElement.style.position = "absolute";
            questionElement.style.top = "32%";
            questionElement.style.left = "50%";
            questionElement.style.transform = "translate(-50%, -50%)";
            questionElement.style.textAlign = "center";
            questionElement.style.fontWeight = "bold";
            questionElement.style.fontSize = "36px";
            questionElement.style.color = "#2e2856";
            questionElement.style.fontFamily = "'helvetica', bold";
            container.appendChild(questionElement);

            function adjustFontSize_question() {
            var screenWidth = window.innerWidth;
            var screenHeight = window.innerHeight;
            var scaleFactor = Math.min(screenWidth / 1080, screenHeight / 1920);
            var maxFontSize = 36;
            var adjustedFontSize_question = Math.floor(maxFontSize * scaleFactor);
            questionElement.style.fontSize = adjustedFontSize_question + "px";
            }
            adjustFontSize_question();
            window.addEventListener('resize', adjustFontSize_question);

            // Display the answer buttons in a column
            var answerButtonsContainer = document.createElement("div");
            answerButtonsContainer.className = "answer-buttons-container";
            answerButtonsContainer.style.position = "absolute";
            answerButtonsContainer.style.bottom = "30%";
            answerButtonsContainer.style.left = "50%";
            answerButtonsContainer.style.transform = "translate(-50%, 50%)";
            answerButtonsContainer.style.width = "auto";
            answerButtonsContainer.style.display = "block";
            answerButtonsContainer.style.textAlign = "center";
            container.appendChild(answerButtonsContainer);

            for (var i = 0; i < selectedQuestion.answers.length; i++) {
                var answerButton = document.createElement("button");
                answerButton.className = "answer-button";
                answerButton.innerText = selectedQuestion.answers[i];
                answerButtonsContainer.appendChild(answerButton);
                // Set button styles
                answerButton.style.width = "90%"; // Adjust width as needed
                answerButton.style.height = "25%"; // Adjust height as needed
                answerButton.style.margin = "12px"; // Add margin between buttons
                answerButton.style.fontSize = "2vw";
                
            }

            // Add event listeners to answer buttons
            var answerButtons = document.querySelectorAll(".answer-button");
            var feedbackText = document.createElement("div"); // Create a new div element for feedback text
            feedbackText.classList.add("feedback-text");
            feedbackText.style.position = "absolute";
            feedbackText.style.bottom = "5%";
            feedbackText.style.left = "50%";
            feedbackText.style.transform = "translate(-50%, -50%)";
            feedbackText.style.textAlign = "center";
            feedbackText.style.whiteSpace = "normal";
            feedbackText.style.maxWidth = "30%";
            feedbackText.style.fontWeight = "bold";
            feedbackText.style.fontSize = "40px";
            feedbackText.style.color = "white";
            feedbackText.style.fontFamily = "'helvetica', bold";
            feedbackText.style.textShadow = "0 0 3px #003366, 0 0 3px #003366, 0 0 3px #003366, 0 0 3px #003366"; 

            function adjustFontSize() {
            var screenWidth = window.innerWidth;
            var screenHeight = window.innerHeight;
            var scaleFactor = Math.min(screenWidth / 1080, screenHeight / 1920);
            var maxFontSize = 40;
            var adjustedFontSize = Math.floor(maxFontSize * scaleFactor);
            feedbackText.style.fontSize = adjustedFontSize + "px";
            End_Text.style.fontSize = adjustedFontSize + "px";
            }
            adjustFontSize();
            window.addEventListener('resize', adjustFontSize);

            answerButtons.forEach(function(button, index) {
                button.addEventListener('click', function() {
                    // Handle button click
                    var isCorrect = index === selectedQuestion.correctAnswerIndex;

                    if (isCorrect) {
                        score += 10;
                        feedbackText.textContent = "CORRECTO +10!"; // Set feedback text to +10 if correct
                    } else {
                        feedbackText.textContent = "INCORRECTO!"; // Set feedback text to +0 if incorrect
                    }
                    container.appendChild(feedbackText);

                    setTimeout(function() {
                        container.removeChild(feedbackText); // Remove feedback text after a second
                    }, 1500);

                    // Remove question and answer buttons
                    container.removeChild(questionElement);
                    answerButtonsContainer.parentNode.removeChild(answerButtonsContainer);

                    // Add question to asked questions
                    askedQuestions.push(selectedQuestion);

                    // Start a new round
                    boton_inicio.click();
                });
            });
        }
    });

    boton_x.addEventListener('click', function() {
        location.reload(); // Reload the page
    });

    resetButton.addEventListener('click', function() {
        // Reset score and start a new round
        score = 0;
        scoreText1.style.display = "none";
        scoreText2.style.display = "none";
        End_Text.style.display = "none";
        resetButton.style.display = "none";
        boton_inicio.click();
        logo_final.style.display = "none";
    });

    
};
