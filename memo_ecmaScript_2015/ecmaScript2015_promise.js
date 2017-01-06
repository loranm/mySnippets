function startTimer(duration = 1000){
  return new Promise((resolve, reject) => {
    // setTimeout(()=>resolve(`Fin du timer ${duration}`),duration)
    setTimeout(()=>reject(`erreur ${duration}`),duration*10)
  })
}


startTimer().then((msg)=>console.log(msg)).catch((msg)=>console.log(msg));
