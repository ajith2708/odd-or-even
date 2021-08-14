<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>

<p>This example calls a function which performs a calculation and returns the result:</p>

<p id="demo"></p>

<script>
function  myFunction(a, b) {
  return a * b;
}
var x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
