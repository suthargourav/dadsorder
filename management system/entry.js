
function login() {
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(!name || !pass) {
        document.getElementById("loginError").innerText = "Fill all fields!";
        return;
    }

    if(pass === "123") {
        currentUser = name;
        showPage("formPage"); // next page
    } else {
        document.getElementById("loginError").innerText = "Wrong Password!";
    }
}





let currentUser = "";

// PAGE SWITCH FUNCTION
function showPage(pageId) {

    document.querySelector(".main").style.display = "none";

    let pages = ["dashboard","employeePage","projectPage","taskPage"];

    pages.forEach(p => {
        document.getElementById(p).style.display = "none";
    });

    document.getElementById(pageId).style.display = "block";
}

// LOGIN UPDATE
function login() {
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(!name || !pass) {
        document.getElementById("loginError").innerText = "Fill all fields!";
        return;
    }

    if(pass === "123") {
        currentUser = name;
        showPage("dashboard");
    } else {
        document.getElementById("loginError").innerText = "Wrong Password!";
    }
}

// LOGOUT
function logout() {
    location.reload();
}

// ================= EMPLOYEE =================
let employees = [];

function addEmployee() {
    let name = document.getElementById("empName").value;
    let email = document.getElementById("empEmail").value;

    if(!name || !email) return alert("Fill all fields");

    employees.push({name,email});
    displayEmployees();
}

function displayEmployees() {
    let list = document.getElementById("empList");
    list.innerHTML = "";

    employees.forEach((emp,index)=>{
        list.innerHTML += `<li>${emp.name} - ${emp.email}
        <button onclick="deleteEmp(${index})">Delete</button></li>`;
    });

    document.getElementById("empCount").innerText = employees.length;
}

function deleteEmp(index){
    employees.splice(index,1);
    displayEmployees();
}

// ================= PROJECT =================
let projects = [];

function addProject() {
    let name = document.getElementById("projName").value;

    if(!name) return alert("Enter project");

    projects.push(name);
    displayProjects();
}

function displayProjects(){
    let list = document.getElementById("projList");
    list.innerHTML = "";

    projects.forEach((p,i)=>{
        list.innerHTML += `<li>${p}
        <button onclick="deleteProj(${i})">Delete</button></li>`;
    });

    document.getElementById("projCount").innerText = projects.length;
}

function deleteProj(i){
    projects.splice(i,1);
    displayProjects();
}

// ================= TASK =================


function addTask(){
    let name = document.getElementById("taskName").value;

    if(!name) return alert("Enter task");

    tasks.push(name);
    displayTasks();
}

function displayTasks(){
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((t,i)=>{
        list.innerHTML += `<li>${t}
        <button onclick="deleteTask(${i})">Delete</button></li>`;
    });

    document.getElementById("taskCount").innerText = tasks.length;
}

function deleteTask(i){
    tasks.splice(i,1);
    displayTasks();
}









// LOGIN
function login() {
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(!name || !pass){
        document.getElementById("loginError").innerText = "Fill all fields!";
        return;
    }

    if(pass === "123"){
        document.querySelector(".main").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        document.getElementById("loginError").innerText = "Wrong Password!";
    }
}

// PAGE SWITCH
function showPage(page){
    let pages = document.querySelectorAll(".page");
    pages.forEach(p => p.style.display = "none");

    document.getElementById(page).style.display = "block";
}

// NOTIFICATION
function toggleNotification(){
    let box = document.getElementById("notificationBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
}

// PROFILE
function toggleProfile(){
    let menu = document.getElementById("profileMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// LOGOUT
function logout(){
    location.reload();
}

// ================= EMPLOYEE =================


function addEmployee(){
    let name = document.getElementById("empName").value;
    let email = document.getElementById("empEmail").value;

    if(!name || !email) return alert("Fill all");

    employees.push({name,email});
    displayEmployees();
}

function displayEmployees(){
    let list = document.getElementById("empList");
    list.innerHTML = "";

    employees.forEach((e,i)=>{
        list.innerHTML += `<li>${e.name} (${e.email})
        <button onclick="deleteEmp(${i})">Delete</button></li>`;
    });

    document.getElementById("empCount").innerText = employees.length;
}

function deleteEmp(i){
    employees.splice(i,1);
    displayEmployees();
}

// ================= PROJECT =================


function addProject(){
    let name = document.getElementById("projName").value;

    if(!name) return;

    projects.push(name);
    displayProjects();
}

function displayProjects(){
    let list = document.getElementById("projList");
    list.innerHTML = "";

    projects.forEach((p,i)=>{
        list.innerHTML += `<li>${p}
        <button onclick="deleteProj(${i})">Delete</button></li>`;
    });

    document.getElementById("projCount").innerText = projects.length;
}

function deleteProj(i){
    projects.splice(i,1);
    displayProjects();
}

// ================= TASK =================


function addTask(){
    let name = document.getElementById("taskName").value;

    if(!name) return;

    tasks.push(name);
    displayTasks();
}

function displayTasks(){
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((t,i)=>{
        list.innerHTML += `<li>${t}
        <button onclick="deleteTask(${i})">Delete</button></li>`;
    });

    document.getElementById("taskCount").innerText = tasks.length;
}

function deleteTask(i){
    tasks.splice(i,1);
    displayTasks();
}

// ================= ATTENDANCE =================
let attendance = [];

function markAttendance(){
    let date = new Date().toLocaleString();

    attendance.push(date);

    let list = document.getElementById("attendanceList");
    list.innerHTML += `<li>Checked in at ${date}</li>`;
}



