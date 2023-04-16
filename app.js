
const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

logInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

document.querySelector('#push').onclick = function () {
    if (document.querySelector('#taskInput').value.length == 10) {
        alert("Please Enter a Task")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
    <div class="task">
        <span id="taskname">
            ${document.querySelector('#taskInput').value}
        </span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
`;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
    document.querySelector('#taskInput').value = '';
}

      // Get the animated square element
      const square = document.getElementById('animated-square');

      // Set the initial position of the square
      square.style.left = '0px';
      
      // Set the animation speed (in milliseconds)
      const animationSpeed = 10;

      // Start the animation loop
      setInterval(() => {
        // Get the current position of the square
        const currentPosition = parseInt(square.style.left);

        // Update the position of the square
        square.style.left = `${currentPosition + 1}px`;
      }, animationSpeed);


      function start(al) {
        var bar = document.getElementById('progressBar');
        var status = document.getElementById('status');
        status.innerHTML = al + "%";
        bar.value = al;
        al++;
        var sim = setTimeout("start(" + al + ")", 15000);
        if (al == 100) {
          status.innerHTML = "100%";
          bar.value = 100;
          clearTimeout(sim);
          var finalMessage = document.getElementById('finalMessage');
          finalMessage.innerHTML = "Process is complete";
        }
      }