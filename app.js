const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  const game= document.querySelector('.game');
  const puntaje=document.querySelector('.scor')
  
  

  let lastHole;
  let timeEnd=false;
  let score=0;
  let scoreMole=0;
  let timeEnd2=false;

  if(localStorage.getItem('scoreMole')===null){//para asignar el valor inicial de score si es primera vez en usarse
    localStorage.setItem('scoreMole',scoreMole);
  }
  
  function show(){//mostrar el score
    let punt=localStorage.getItem('scoreMole');
    puntaje.textContent=`Your best score is ${punt}pts`
    puntaje.classList.add('show');
    setTimeout(()=>puntaje.classList.remove('show'),4000)



  }

  
  function randTime(min,max){
    return Math.round(Math.random()*(max - min) +min);

  }
  function random(holes){
    const idx=Math.floor(Math.random()*holes.length);
    const hole=holes[idx];
    if(hole===lastHole){
      
      random(holes);
    }
    lastHole=hole;
    return hole
  }
  function peep(){
    const time=randTime(200,1000);
    const hole=random(holes);
    hole.classList.add('up');
    setTimeout(()=> {
      hole.classList.remove('up');
      if(!timeEnd){ //si el tiempo no termina sigue sacando topos
        peep()
      }
      
    },time)          
  }
  function startGame(){
    scoreBoard.textContent=0;
    timeEnd=false;
    score=0;
    
    peep();
    setTimeout(function(){
      timeEnd=true;
      
      scoreMole=localStorage.getItem('scoreMole');
      scoreMole=parseInt(scoreMole);
      
        if(score>scoreMole){//condicion si el score es mayor guarda sino no
        
          scoreMole=score;
          localStorage.setItem('scoreMole',scoreMole);
        }                
      }
      ,10000)//tiempo de la partida

    
   //tiempo de la partida

    
  
  }
  function scor(e){
    if(!e.isTrusted){
      return
    }else{
      score++
      
      this.classList.remove('up');
      scoreBoard.textContent=score;
    }  
  }
  moles.forEach(function(mole){
    mole.addEventListener('click',scor)

  })
  function normalMode(){
    location.reload();
  }
  function inicioHard(){//modo hard todo el modo hard est dentro de esta funcion porq trabaja con variables y funciones idependientes
    game.innerHTML='';
    game.className='game2';
    game.innerHTML=`
    <div class="hole2">
      <div class="mole2"></div>
    </div>
    <div class="hole2">
      <div class="mole2"></div>
    </div>
    <div class="hole2">
      <div class="mole2"></div>
    </div>
    <div class="hole2">
      <div class="mole2"></div>
    </div>
    <div class="hole2">
      <div class="mole2"></div>
    </div>
    <div class="hole2">
      <div class="mole2"></div>
    </div>
    <div class="hole2">
      <div class="mole2"></div>
    </div>
    <div class="hole2">
      <div class="mole2"></div>
    </div>
    <div class="hole2">
      <div class="mole2"></div>
    </div>
    <div class="hole2">
      <div class="mole2"></div>
    </div>`;
    const holes2=document.querySelectorAll('.hole2');
    const moles2 = document.querySelectorAll('.mole2');
    let start22=document.getElementById('start2');
    
    
    
    
    
    
    function randomH(holes){
      const idx2=Math.floor(Math.random()*holes2.length);
      const hole2=holes2[idx2];
      if(hole2===lastHole){
      
        randomH(holes);
      }
      lastHole=hole2;
      return hole2
    }
    function peep2(){
       const time2=randTime(200,700);
       const hole2=randomH(holes);
       hole2.classList.add('up');
       setTimeout(()=> {
         hole2.classList.remove('up');
          if(!timeEnd2){ //si el tiempo no termina sigue sacando topos
            peep2()
          }
      
        },time2)          
    }
    function start2(){
      scoreBoard.textContent=0;
      timeEnd2=false;
      score=0;
      peep2();
      setTimeout(function(){
        timeEnd2=true;
      
        scoreMole=localStorage.getItem('scoreMole');
        scoreMole=parseInt(scoreMole);
      
        if(score>scoreMole){//condicion si el score es mayor guarda sino no
        
          scoreMole=score;
          localStorage.setItem('scoreMole',scoreMole);
        }                
      }
        ,30000)
    }
     moles2.forEach(function(mole){
      mole.addEventListener('click',scor2)

    });
    function scor2(e){
      if(!e.isTrusted){
        return
      }else{
        score++
      
        this.classList.remove('up');
        scoreBoard.textContent=score;
      }   
    }
    
    
    start22.addEventListener('click',start2);
    



  }
  
  
  