<template>
  <div>
    <h1>XMLHttpRequest 对象</h1>
    <button type="button" onclick="loadDoc()">请求数据</button>
    <p id="demo"></p>
  </div>
</template>
<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "/demo/demo_post2.asp", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("fname=Bill&lname=Gates");
}
</script>