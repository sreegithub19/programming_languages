alert('one')
document.getElementById('one').onclick = 
function(){
document.write(`
<h1>one</h1>
<script>
alert(2+3)
</script>
`);
}

document.getElementById('one_').innerHTML = 'one_';
