function printStars() {
    var i, j;
    for (i = 0; i < 5; i++) {
        for (j = 0; j <= i; j++) {
            document.write("* ");
        }
        document.write("<br>")
    }
}

printStars();