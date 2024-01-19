document.addEventListener("DOMContentLoaded", () => {
  //your code goes here
  const inputField = document.getElementById("new-task-description");
  const userField = document.getElementById("user");
  const durationField = document.getElementById("duration");
  const dateDueField = document.getElementById("date-due");
  const formElement = document.querySelector("form");
  const tasksList = document.querySelector("#tasks");

  formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      let newTask = inputField.value.trim();
      let user = userField.value.trim();
      let duration = durationField.value.trim();
      let dateDue = dateDueField.value.trim();

      if (newTask.length === 0) {
          alert('Task description cannot be empty');
      } else {
          handleToDo({
              task: newTask,
              user: user,
              duration: duration,
              dateDue: dateDue,
          });
      }

      formElement.reset();
  });

  function handleToDo({ task, user, duration, dateDue }) {
      const listItem = document.createElement("li");
      const deleteButton = document.createElement("button");
      const editButton = document.createElement("button");

      listItem.textContent = `${task} (User: ${user}, Duration: ${duration}, Date Due: ${dateDue})`;

      deleteButton.textContent = 'X Remove';
      deleteButton.addEventListener('click', handleDelete);

      editButton.textContent = 'Edit';
      editButton.addEventListener('click', handleEdit);

      listItem.appendChild(deleteButton);
      listItem.appendChild(editButton);

      tasksList.appendChild(listItem);
  }

  function handleDelete(e) {
      e.target.parentNode.remove();
  }

  function handleEdit(e) {
      const listItem = e.target.parentNode;
      const taskText = listItem.textContent.split(' (')[0];
      const userText = listItem.textContent.match(/User: (\w+)/)[1];
      const durationText = listItem.textContent.match(/Duration: (\w+)/)[1];
      const dateDueText = listItem.textContent.match(/Date Due: (\w+)/)[1];

      inputField.value = taskText;
      userField.value = userText;
      durationField.value = durationText;
      dateDueField.value = dateDueText;

      listItem.remove();
  }
});
