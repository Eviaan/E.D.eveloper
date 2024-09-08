                //CAROUSSEL


// ecran de téléphone ?
                if (window.matchMedia("(min-width: 500px)").matches) {
                
                    
                document.body.onload= function() {
                    nbr = 3;
                    p = 0;
                    container = document.getElementById("container");
                    l = document.getElementById("l");
                    r = document.getElementById("r");
                    container.style.width=(49*nbr)+'vw';
            
                
                    afficherMasquer();
                }
            
            
                r.onclick= function() {
            
                    if(p>-nbr+1) {
                         p--;
                    }
                   
                    container.style.transform="translate("+p*47.5+"vw)";
                    container.style.transition="all 0.5s ease"
                    afficherMasquer();
                }
                l.onclick= function() {
            
                    if(p<0) {
                        p++;
                    }
            
                    container.style.transform="translate("+p*47.5+"vw)";
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
            
                
                
                    
                    
                }
        // sinon écran de + de 500px ?
                else if(window.matchMedia("(max-width: 500px)").matches) {

                    document.body.onload= function() {
                        nbr = 2;
                        p = 0;
                        container = document.getElementById("container");
                        l = document.getElementById("l");
                        r = document.getElementById("r");
                        container.style.width=(84*nbr)+'vw';
                
                    
                        afficherMasquer();
                    }
                
                
                    r.onclick= function() {
                
                        if(p>-nbr+1) {
                             p--;
                        }
                       
                        container.style.transform="translate("+p*80+"vw)";
                        container.style.transition="all 0.5s ease"
                        afficherMasquer();
                    }
                    l.onclick= function() {
                
                        if(p<0) {
                            p++;
                        }
                
                        container.style.transform="translate("+p*80+"vw)";
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
                    

                
            }
