document.addEventListener("DOMContentLoaded", () => {
  const balanceElement = document.getElementById("balance");
  const quizContainer = document.getElementById("quiz-container");
  const headerTaskText = document.getElementById("header-task-text");
  const popupSuccess = document.getElementById("popup-success");
  const popupValue = document.getElementById("popup-value");
  const popupAudio = document.getElementById("popup-audio");

  let currentTaskIndex = 0;

  // Função para capturar parâmetros da URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Pega o fbclid da URL
  const fbclid = getQueryParam("fbclid");
  localStorage.setItem("fbclid_param", fbclid)
  




  const tasks = [
    {
      type: "intro",
      headerText: "",
      instruction:
        "Você acaba de receber acesso a nova ferramenta do Google para aprender <STRONG>como funcionam os Captchas</STRONG>. <br><br><STRONG> Aproveite: com apenas 3 análises,</STRONG> você ja começa a entender como grandes sistemas de verificação funcionam na prátrica! <BR><BR><STRONG>Clique no botão abaixo e comece agora!</STRONG>",
      buttonText: "CLIQUE AQUI PARA COMEÇAR",
      balance: 100,
      reward: 0,
    },
    {
      type: "quiz",
      headerText:
        "No Captcha abaixo, o usuário deveria ter marcado em verde todas as imagens que continham carros.",
      instruction: "Faça esta análise para receber $25.00",
      imageLink: "images/img1.png",
      balance: 100,
      reward: 25,
    },
    {
      type: "quiz",
      headerText:
        "No Captcha abaixo, o usuário deveria ter marcado em verde todas as imagens que continham pessoas.",
      instruction: "Faça esta análise para receber $15.00",
      imageLink: "images/img2.png",
      balance: 125,
      reward: 15,
    },
    {
      type: "quiz",
      headerText:
        "No Captcha abaixo, o usuário deveria ter marcado em verde todas as imagens que continham carros.",
      instruction: "Faça esta análise para receber $40.00",
      imageLink: "images/img1.png",
      balance: 140,
      reward: 40,
    },
    {
      type: "quiz",
      headerText:
        "No Captcha abaixo, o usuário deveria ter marcado em verde todas as imagens que continham escadas.",
      instruction: "Faça esta análise para receber $25.00",
      imageLink: "images/escada.png",
      balance: 180,
      reward: 25,
    },
    {
      type: "quiz",
      headerText:
        "No Captcha abaixo, o usuário deveria ter marcado em verde todas as imagens que continham motas.",
      instruction: "Faça esta análise para receber $20.00",
      imageLink: "images/mota.png",
      balance: 205,
      reward: 20,
    },
    {
      type: "final",
      headerText:
        "Realizado fez suas 3 primeiras análises! E agora você está pronto para fazer sua primeira retirada.",
      instruction:
        "Para aprender como transformar esse saldo em <strong>ganhos reais com e-Mola ou M-Pesa</strong>, assista a um vídeo explicativo de apenas 4 minutos.",
      buttonText: "VER O VIDEO",
      redirectUrl: `https://moz-offer.vercel.app/captchamola/captcha/?fbclid=${fbclid}`,
      balance: 225,
      reward: 0,
    },
  ];

  const loadNextTask = () => {
    const task = tasks[currentTaskIndex];

    if (task.balance !== undefined) {
      balanceElement.textContent = `$${task.balance}`;
    }

    if (task.headerText !== undefined) {
      headerTaskText.textContent = task.headerText;
    }

    if (task.type === "final") {
      const finalScreenHTML = `
                <div class="final-message quiz-content">
                    <h2>PARABÉNS!</h2>
                    <p>${task.instruction}</p>
                    <button class="final-button" id="final-redirect-button">${task.buttonText}</button>
                </div>
            `;
      quizContainer.innerHTML = finalScreenHTML;
      document
        .getElementById("final-redirect-button")
        .addEventListener("click", () => {
          window.location.href = task.redirectUrl;
        });
      return;
    }

    if (task.type === "intro") {
      const introScreenHTML = `
                <div class="final-message quiz-content">
                    <h2>PARABÉNS, VOCÊ FOI SELECIONADO!</h2>
                    <p>${task.instruction}</p>
                    <button class="final-button" id="intro-start-button">${task.buttonText}</button>
                </div>
            `;
      quizContainer.innerHTML = introScreenHTML;
      document
        .getElementById("intro-start-button")
        .addEventListener("click", () => {
          currentTaskIndex++;
          loadNextTask();
        });
      return;
    }

    if (task.type === "quiz") {
      const taskHTML = `
                <div class="task-instruction quiz-content">
                    <p>${task.instruction}</p>
                </div>
                <div class="single-image-container quiz-content">
                    <img src="${task.imageLink}" alt="Imagem da tarefa" class="single-image">
                </div>
                <div class="button-group quiz-content">
                    <button class="button correct" id="btn-correct">CORRECTO</button>
                    <button class="button incorrect" id="btn-incorrect">INCORRECTO</button>
                </div>
            `;

      quizContainer.innerHTML = taskHTML;

      document
        .getElementById("btn-correct")
        .addEventListener("click", handleTaskClick);
      document
        .getElementById("btn-incorrect")
        .addEventListener("click", handleTaskClick);
    }
  };

  const handleTaskClick = () => {
    const currentTask = tasks[currentTaskIndex];
    if (currentTask.reward > 0) {
      popupValue.textContent = `+$${currentTask.reward}.00`;
      popupSuccess.style.display = "flex";
      if (popupAudio) {
        popupAudio.currentTime = 0;
        popupAudio.play();
      }
      const confettiCanvas = document.getElementById("confetti-canvas");
      confetti.create(confettiCanvas, { resize: true })({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
      setTimeout(() => {
        popupSuccess.style.display = "none";
        currentTaskIndex++;
        loadNextTask();
      }, 1500);
    } else {
      currentTaskIndex++;
      loadNextTask();
    }
  };


  loadNextTask();
});
