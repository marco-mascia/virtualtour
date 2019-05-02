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

    pannellum.viewer('panorama', {   
        "default": {
            "firstScene": "countryroad",
            "autoLoad": true,   
            "author": "Fabbrica Digitale",
            "compass": true,
            "northOffset": 243,
            "sceneFadeDuration": 1000
        },

        "scenes": {
            "countryroad": {
                "title": "Country Road",
                "hfov": 110,
                "pitch": -3,
                "yaw": 117,
                "type": "equirectangular",
                "panorama": "https://pannellum.org/images/tocopilla.jpg",
                //"panorama": "https://i.imgur.com/6sJk16R.jpg",
                "hotSpots": countryroadHS
            },
            "desert": {
                "title": "Desert",
                "hfov": 110,
                "yaw": 5,
                "type": "equirectangular",
                "panorama": "https://i.imgur.com/G7t9QD9.jpg",
                "hotSpots": desertHS
            }
        }
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
}())