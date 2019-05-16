(function(){
    var countryroadHS = [
        {
            "pitch": 21,
            "yaw": 6,
            "cssClass": "hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Classico esempio di oggetto volante non identificato"
        },
        {
            "pitch": 6,
            "yaw": -62,
            "cssClass": "hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Interessantissimo cartello stradale"
        },
        {
            "pitch": -15,
            "yaw": 222.6,
            "cssClass": "hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Tipica strada sterrata"
        },
        {
            "pitch": -0.9,
            "yaw": 130,
            "type": "scene",
            //"cssClass": "hotspot",
            //"createTooltipFunc": hotspot,
            "text": "Verso il deserto",
            "sceneId": "desert"  
        }
            
    ];

    var desertHS = [
        {
            "pitch": -0.6,
            "yaw": 150,
            "type": "scene",
            //"cssClass": "hotspot",
            "text": "Verso la strada di campagna",
            "sceneId": "countryroad",
            "targetYaw": -23,
            "targetPitch": 2
        },
        {
            "pitch": 1,
            "yaw": -83,
            "type": "info",
            "cssClass": "hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Walter White & Jesse Pinkman"
        },
    ]


    var cancelloHS = [
        {
            "pitch": -0.6,
            "yaw": 100,
            "type": "scene",
            "text": "Verso il logo ",
            "sceneId": "logo",
            "targetYaw": 100,
            "targetPitch": 2
        },
        {
            "pitch": 1,
            "yaw": -83,
            "type": "info",
            "cssClass": "hotspot",         //classe css personalizzata
            "createTooltipFunc": hotspot,  //funzione di rendering
            "createTooltipArgs": "bacheca" //parametri 
         },
         {
            "pitch": 1,
            "yaw": -83,
            "type": "info",
            "cssClass": "hotspot",         //classe css personalizzata
            "createTooltipFunc": hotspot,  //funzione di rendering
            "createTooltipArgs": "bla bla bla" //parametri 
         },
         {
            "pitch": 1,
            "yaw": -100,
            "type": "info",
            "cssClass": "hotspot",         //classe css personalizzata
            "createTooltipFunc": hotspotImageRenderer,  //funzione di rendering
            "createTooltipArgs": "img/Tiger.jpg" //parametri 
         }
         
    ]
    var logoHS = [
        {
            "pitch": -0.6,
            "yaw": 100,
            "type": "scene",
            "text": "Verso la porta",
            "sceneId": "porta",
            "targetYaw": 200,
            "targetPitch": 2
        },
        {
            "pitch": -0.6,
            "yaw": -120,
            "type": "scene",
            "text": "Verso cancello",
            "sceneId": "cancello",
            "targetYaw": 280,
            "targetPitch": 2
        }
    ]
    var portaHS = [
        {
            "pitch": -0.6,
            "yaw": 200,
            "type": "scene",
            "text": "Verso ingresso",
            "sceneId": "ingresso",
            "targetYaw": 120,
            "targetPitch": 2
        },
        {
            "pitch": -0.6,
            "yaw": 80,
            "type": "scene",
            "text": "Verso logo",
            "sceneId": "logo",
            "targetYaw": 280,
            "targetPitch": 2
        }
    ]
    var ingressoHS = [
        {
            "pitch": -0.6,
            "yaw": 320,
            "type": "scene",
            "text": "Verso porta",
            "sceneId": "porta",
            "targetYaw": 200,
            "targetPitch": 2
        }
    ]




    viewer = pannellum.viewer('panorama', {   
        "default": {
            "firstScene": "cancello",
            "autoLoad": true,   
            "author": "Fabbrica Digitale",
            "compass": true,
            "northOffset": 243,
            "sceneFadeDuration": 1000
        },

        "scenes": {
           "cancello" : { 
                "title": "cancello",
                "hfov": 110,
                "pitch": -3,
                "yaw": 117,
                "type": "equirectangular",
                "panorama": "./img/1.jpg",
                "hotSpots": cancelloHS
           },
           "logo" : { 
                "title": "logo",
                "hfov": 110,
                "pitch": -3,
                "yaw": 117,
                "type": "equirectangular",
                "panorama": "./img/2.jpg",
                "hotSpots": logoHS
           },
           "porta" : { 
                "title": "porta",
                "hfov": 110,
                "pitch": -3,
                "yaw": 117,
                "type": "equirectangular",
                "panorama": "./img/3.jpg",
                "hotSpots": portaHS
           },
           "ingresso" : { 
                "title": "ingresso",
                "hfov": 110,
                "pitch": -3,
                "yaw": 117,
                "type": "equirectangular",
                "panorama": "./img/4.jpg",
                "hotSpots": ingressoHS
           }
        }
    });

       
    viewer.on('mousedown', function(event) {
        // For pitch and yaw of center of viewer
        console.log("Pitch: ", viewer.getPitch());
        console.log("Yaw: ", viewer.getYaw());
        // For pitch and yaw of mouse location
        //console.log(viewer.mouseEventToCoords(event));
        console.log('-----');
    });



    // Hot spot creation function
    function hotspot(hotSpotDiv, args) {
        hotSpotDiv.classList.add('tooltip');
        var span = document.createElement('span');
        span.innerHTML = args;
        hotSpotDiv.appendChild(span);

        span.style.width = span.scrollWidth - 20 + 'px';
        span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
        span.style.marginTop = -span.scrollHeight - 12 + 'px';
    }

     // Hot spot creation function
     function hotspotImageRenderer(hotSpotDiv, imgSource) {
        
        hotSpotDiv.classList.add('tooltip');
        var image = document.createElement('img');
        image.src = imgSource;
        hotSpotDiv.appendChild(image);
        
        image.style.width = 100 + 'px';
        image.style.marginLeft = -(image.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
        image.style.marginTop = -image.scrollHeight - 12 + 'px';
        
    }

}())