<h1>hello</h1>

<?php
$nume = gethostname() . " : " . get_current_user();
<<<<<<< HEAD

echo $nume;

echo '<br>';
$a = 4 + 7;
echo $a;


function add($a, $b) {
    return $a + $b;
}

$r = add(2, 3);
echo "<br><button>Cancel</button>";

=======
echo $nume;
echo '<br>';
$a = 4 + 7;
echo $a;
function add($a, $b) {
    return $a + $b;
}
$r = add(2, 3);
echo "<br><button>Cancel</button>";
>>>>>>> e425a86e58ca11eef0dcd08a3b883fea8285cecc
?>

<button>Save</button>

<?php
<<<<<<< HEAD

echo $r;

=======
echo $r;
>>>>>>> e425a86e58ca11eef0dcd08a3b883fea8285cecc
?>

<h1>Tabla inmultirii</h1>
<form action="">
    <input type="number" name="number" value="11">
    <button>Multiply</button>
</form>
|
<?php
<<<<<<< HEAD
    for ($i = 1; $i <= 10; $i++) {
        echo "<a href='?number=$i'>$i</a> |";
    }
=======
for ($i = 1; $i <= 10; $i++) {
    echo "<a href='?number=$i'>$i</a> |";
}
>>>>>>> e425a86e58ca11eef0dcd08a3b883fea8285cecc
?>

<table>
    <?php
    $numar = isset($_GET["number"]) ? $_GET["number"] : 1;
<<<<<<< HEAD

=======
>>>>>>> e425a86e58ca11eef0dcd08a3b883fea8285cecc
    for($i = 1; $i <= 10; $i++) {
        $r = $numar * $i;
        echo "<tr><td>$i</td><td>* $numar = </td><td>$r</td></tr>";
        //echo "<tr><td>".$i."</td><td>* ".$numar." = </td><td>".$r."</td></tr>";
    }
    ?>
<<<<<<< HEAD
</table>
=======
</table>
>>>>>>> e425a86e58ca11eef0dcd08a3b883fea8285cecc
