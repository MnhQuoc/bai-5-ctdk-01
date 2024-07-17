function xeploai() {
    let ktra = +document.getElementById("ktra").value
    let giuaky = +document.getElementById("giuaky").value
    let cuoiky = +document.getElementById("cuoiky").value
    var tb = (ktra + giuaky*2 + cuoiky*3)/6
    document.getElementById("diemtb").innerHTML =  "Điểm trung bình là: " + tb;
    if (tb >= 9) {
            document.getElementById("result").innerHTML =  "Học lực: xuất sắc ";
        }
        else if(tb>=8){
            document.getElementById("result").innerHTML =  "Học lực: Giỏi ";
        }
        else if(tb>=6.5){
            document.getElementById("result").innerHTML =  "Học lực: Khá ";
        }
        else if(tb>=5){
            document.getElementById("result").innerHTML =  "Học lực: Trung bình ";
        }
        else {
            document.getElementById("result").innerHTML =  "Học lực: Yếu ";
        }
}
