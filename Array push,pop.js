<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2> 
<h2>push()</h2>
<p>The push() method returns the new array length.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

function myFunction() {
  document.getElementById("demo1").innerHTML = fruits.push("Kiwi");
  document.getElementById("demo2").innerHTML = fruits;
    document.getElementById("demo3").innerHTML = fruits.pop();

}
</script>

</body>
</html>
