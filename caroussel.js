                //CAROUSSEL
                document.body.onload= function() {
                    nbr = 2;
                    p = 0;
                    container = document.getElementById("container");
                    l = document.getElementById("l");
                    r = document.getElementById("r");
                    container.style.width=(800*nbr)+'px';
            
                
                    afficherMasquer();
                }
            
            
                r.onclick= function() {
            
                    if(p>-nbr+1) {
                         p--;
                    }
                   
                    container.style.transform="translate("+p*600+"px)";
                    container.style.transition="all 0.5s ease"
                    afficherMasquer();
                }
                l.onclick= function() {
            
                    if(p<0) {
                        p++;
                    }
            
                    container.style.transform="translate("+p*600+"px)";
                    container.style.transition="all 0.5s ease"
                    afficherMasquer();
            
                    }
            
                function afficherMasquer() {
                    if(p==-nbr+1) {
                        r.setAttribute("disabled", "");
                        r.classList.add("disabled");
                    }
                    else {
                        r.removeAttribute("disabled");
                        r.classList.remove("disabled");
                    }
            
                    if(p==0) {
                        l.setAttribute("disabled", "");
                        l.classList.add("disabled");
                    }
                    else {
                        l.removeAttribute("disabled");
                        l.classList.remove("disabled");
                    } 
                }
            
                