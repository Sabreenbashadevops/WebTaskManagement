const API = "http://127.0.0.1:8000";

async function loadTasks() {
    const res = await fetch(`${API}/tasks`);
    const tasks = await res.json();

    const list = document.getElementById("tasks");
    list.innerHTML = "";

    tasks.forEach(t => {
        const li = document.createElement("li");
        li.innerHTML = t.title + (t.completed ? " ✔" : "");
        list.appendChild(li);
    });
}

async function addTask() {
    const title = document.getElementById("taskInput").value;
    await fetch(`${API}/tasks?title=${title}`, { method: "POST" });
    loadTasks();
}

loadTasks();
