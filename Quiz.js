const correctAnswers = ['B','B','B','B','B'];
const form = document.querySelector('.quiz-form');
const scorebox = document.querySelector('.scorebox')

form.addEventListener('submit', event => {
  event.preventDefault();

  let score = 0;
  const userAnswers = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value, form.Q5.value]

  //check Answers
  userAnswers.forEach((answer, index)=>{
    if(answer === correctAnswers[index]){
      score += 25;
    }
  })
  // console.log(score);
  scrollTo(0,0);
  let scoreDefine = `You've scored:`
  scorebox.textContent = `${scoreDefine} ${score}%`

  let output = 0;
  const timer = setInterval(() => {
    scorebox.textContent = `${scoreDefine} ${output}%`
    if(output === score){
      clearInterval(timer);
    }else{
      output++
    }
  },10)
})

//window object(global object)

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'))


// alert('hello');
// window.alert('alert');

// setTimeout( ()=>{
//   alert('hello, Promigo')
// },3000);

// let i = 0;
// const timer = setInterval(()=>{
//   console.log('hello')
//   i++
//   if(i === 5){
//     clearInterval(timer);
//   }
// },1000) 
