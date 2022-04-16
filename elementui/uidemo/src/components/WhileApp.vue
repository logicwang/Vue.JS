<template>
  <div>
    <div id="oBox">
      <ul id="scUl">
        <li class="scLi">1</li>
        <li class="scLi">2</li>
        <li class="scLi">3</li>
        <li class="scLi">4</li>

        <li class="scLi">1</li>
        <li class="scLi">2</li>
        <li class="scLi">3</li>
        <li class="scLi">4</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhileApp",
  window,
  onload() {
    var scUl = document.getElementById("scUl");
    var oBoxWidth = document.getElementById("oBox").offsetWidth;
    var x = 0;

    function timerF() {
      scUl.style.left = x + "px";

      if (x == ~oBoxWidth + 1) {
        x = 0;
      } else {
        x--;
      }
    }

    var timer = setInterval(timerF, 5);

    var scLi = document.getElementsByClassName("scLi");
    for (let i = 0; i < scLi.length; i++) {
      scLi[i].onmouseover = function () {
        clearInterval(timer);
      };
      scLi[i].onmouseout = function () {
        timer = setInterval(timerF, 5);
      };
    }
  },
};
</script>
<style lang="scss" scoped>
li{
  list-style: none;
}
</style>