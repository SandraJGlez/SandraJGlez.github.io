let app = document.getElementById('typewriter');
 //app.style.color="#A65168" //Por si quieres a un color más específico
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Una combinación de Física y programadora.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
