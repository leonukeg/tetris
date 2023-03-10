document.addEventListener('DOMContentLoaded', () =>{
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay = document.querySelector('#score')
    const starBtn = document.querySelector('#start-button')

    const width = 10

//the tetriminoes
const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

  const theTetrominoes = [lTetromino,zTetromino,tTetromino,oTetromino,iTetromino]

  let currentPosition = 4
  let currentRotation = 0
  

  let ramdom = Math.floor(Math.random()*theTetrominoes.length)
  let current = theTetrominoes[ramdom][currentRotation]

  function draw(){
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino')

    })
  }
  
  function undraw(){
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetromino')
    })
  }

  timerId = setInterval(moveDown, 1000)
  
  //asignar function to keycodes
  function control(e){
    if(e.keyCode === 37) {
      moveLeft()
    }else if (e.keyCode === 38) {
      //rotate()
    }else if (e.keyCode === 39) {
     moveRigth()
    }else if (e.keyCode === 40) {
      moveDown()
    }
  }

  document.addEventListener('keyup',control)





  function moveDown(){
    undraw()
    currentPosition += width
    draw()
    freeze()
  }

function freeze(){
  if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
    current.forEach(index => squares[currentPosition + index].classList.add('taken') )
    ramdom = Math.floor(Math.random()*theTetrominoes.length)
    current = theTetrominoes[ramdom][currentRotation]
    currentPosition = 4
    draw()
  }

  //move de tetromino

  function moveLeft(){
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    if (!isAtLeftEdge) currentPosition -=1 
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))){
      currentPosition +=1
    }
    draw()
  }

  function moveRigth(){
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)
    if(!isAtRightEdge) currentPosition +=1
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition -=1
    }
    draw() 
  }

}






















})
