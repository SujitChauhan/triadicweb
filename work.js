function start(){
    if(window.innerWidth <= 150){
        
    }
}







var MenuTab;
function p(MenuTab){
    if(MenuTab == 1){
        document.getElementById("MenuTab2").style.border = 'none';
        document.getElementById("MenuTab3").style.border = 'none';
        document.getElementById("MenuTab4").style.border = 'none';
        document.getElementById("MenuTab5").style.border = 'none';
        document.getElementById("MenuTab6").style.border = 'none';
        document.getElementById("MenuTab1").style.borderBottom = 'solid','#D24A4A','3px';
        document.getElementById("MenuTab1").style.borderRadius = '10px';
    }

    if(MenuTab == 2){
        document.getElementById("MenuTab1").style.border = 'none';
        document.getElementById("MenuTab3").style.border = 'none';
        document.getElementById("MenuTab4").style.border = 'none';
        document.getElementById("MenuTab5").style.border = 'none';
        document.getElementById("MenuTab6").style.border = 'none';
        document.getElementById("MenuTab2").style.borderBottom = 'solid','#D24A4A','3px';
        document.getElementById("MenuTab2").style.borderRadius = '10px';
    }

    if(MenuTab == 3){
        document.getElementById("MenuTab1").style.border = 'none';
        document.getElementById("MenuTab2").style.border = 'none';
        document.getElementById("MenuTab4").style.border = 'none';
        document.getElementById("MenuTab5").style.border = 'none';
        document.getElementById("MenuTab6").style.border = 'none';
        document.getElementById("MenuTab3").style.borderBottom = 'solid','#D24A4A','3px';
        document.getElementById("MenuTab3").style.borderRadius = '10px';
    }

    if(MenuTab == 4){
        document.getElementById("MenuTab1").style.border = 'none';
        document.getElementById("MenuTab3").style.border = 'none';
        document.getElementById("MenuTab2").style.border = 'none';
        document.getElementById("MenuTab5").style.border = 'none';
        document.getElementById("MenuTab6").style.border = 'none';
        document.getElementById("MenuTab4").style.borderBottom = 'solid','#D24A4A','3px';
        document.getElementById("MenuTab4").style.borderRadius = '10px';
    }

    if(MenuTab == 5){
        document.getElementById("MenuTab1").style.border = 'none';
        document.getElementById("MenuTab3").style.border = 'none';
        document.getElementById("MenuTab4").style.border = 'none';
        document.getElementById("MenuTab2").style.border = 'none';
        document.getElementById("MenuTab6").style.border = 'none';
        document.getElementById("MenuTab5").style.borderBottom = 'solid','#D24A4A','3px';
        document.getElementById("MenuTab5").style.borderRadius = '10px';
    }

    if(MenuTab == 6){
        document.getElementById("MenuTab1").style.border = 'none';
        document.getElementById("MenuTab3").style.border = 'none';
        document.getElementById("MenuTab4").style.border = 'none';
        document.getElementById("MenuTab5").style.border = 'none';
        document.getElementById("MenuTab2").style.border = 'none';
        document.getElementById("MenuTab6").style.borderBottom = 'solid','#D24A4A','3px';
        document.getElementById("MenuTab6").style.borderRadius = '10px';
    }
}