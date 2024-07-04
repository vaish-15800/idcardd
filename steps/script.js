const idCard = document.getElementById('idCard');
    const cardBack = document.getElementById('cardBack');
    const cardContainer = document.getElementById('cardContainer');
    
    document.addEventListener('mousemove', (event) => {
      const xAxis = (window.innerWidth / 2 - event.clientX) / 25;
      const yAxis = (window.innerHeight / 2 - event.clientY) / 25;
      cardContainer.style.transform = `translate(-50%, -50%) translate(${event.clientX}px, ${event.clientY}px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    cardContainer.addEventListener('click', () => {
        idCard.classList.toggle('flipped');
        cardBack.classList.toggle('flipped');
      });