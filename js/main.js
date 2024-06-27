document.getElementById("push").onclick = function () {
  if (document.querySelector("#new-task input").value.length === 0) {
    alert("Please enter a task");
  } else {
    document.querySelector("#tasks").innerHTML += `
        <div class="task">
            <span id="taskname">${
              document.querySelector("#new-task input").value
            }</span>
            <button class="delete">
                delete<i class="far fa-trash-alt"></i>
            </button>
        </div>
    `;

    var deleteTasks = document.querySelectorAll(".delete");

    deleteTasks.forEach((task) => {
      task.onclick = function () {
        this.parentNode.remove();
      };
    });

    var completeTasks = document.querySelectorAll(".task");

    completeTasks.forEach((task) => {
      task.onclick = function () {
        this.classList.toggle("completed");
      };
    });

    document.querySelector("#new-task input").value = "";
  }
};
