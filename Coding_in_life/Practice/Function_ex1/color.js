var Body = {
    setColor:function (color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setbackgroundColor:function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
var Link = {
    setColor:function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
        $('a').css('color',color);
    }
}
function nightDayHandler(self) {
    if (self.value === 'night') {
        Body.setbackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Link.setColor('red');
    }
    else {
        Body.setbackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Link.setColor('blue');
    }
}