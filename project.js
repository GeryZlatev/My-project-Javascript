require ([ // requestAnimationFrame what is this!?
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery", //esri-widgets/BasemapGallery изписването на пътя е грешно. Не трябва да има "-";
    "esri/widgets/Search"
], (esriconfig, WebMap, MapView, ScaleBar, Legend, Home, LayerList, BasemapToggle, BasemapGallery, Search) => {
    esriconfig.apikey = "AAPK8b13c968054241359f234e78c7b004eefkKbVO9Hk6bBGOoBlPNrS5lFTXkOoZcQ4fo5j0eYOrMTRD_k5EhLbkVobAnOfCv0";

    const webMap = new WebMap({
        portalItem: {
            id: "232b4d297d054b2a831a3ce629ac8495"
        }

    })
    const view = new MapView({
        container: "viewDiv",
        map: webMap // WebMap is incorrect. It must be lowercase; трябва да бъде с малка буква както е името на променливата.

    })
    const homeBtn = new Home({
        view: view // след проперти на обект не трябва да има точка и запетая ;
    })

    view.ui.add(homeBtn, "top-left");

    const legend = new Legend({ // Legend - the variable name must start with lowercase - името на променливата е с малка буква
        view: view

    })
    view.ui.add(legend, "bottom-left"); // here you have to add legend variable, not Legend object. legend != Legend

    const scaleBar = new ScaleBar({
        view: view,
        unit: "metric",
        style: "ruler"
    })

    view.ui.add(scaleBar, "bottom-right");

    view.ui.add("layerList-btn", "top-right"); //в index.html файла елемента има id="layerList-btn" с малка буква, а тук добавяш с главна!
    view.ui.add("basemap-btn", "top-right");

    const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery"
    })

    const basemapGalley = new BasemapGallery({
        view: view,
        source: {
            query: {

            }
        },
    })

    view.ui.add(basemapGalley, "top-right");

    view.ui.add(basemapToggle, "bottom-right");

    const layerList = new LayerList({ // the variable name must start with lowercase, not LayerList!
        view: view
    })

    view.ui.add(layerList, "top-right"); //  you have to add variable layerList not object LayerList; layerList != LayerList

    document
        .getElementById("layerList-btn") // в index.html файла елемента има id="layerList-btn" с малка буква, а тук търсиш с главна!
        .addEventListener("click", function () {
            toggleButton("LayerList")
        })

    document
        .getElementById("basemap-btn")
        .addEventListener("click", function () { //getEventListener некоректна функция. Трябва да се използва addEventListener!
            toggleButton("gallery");
        })

    const searchWidget = new Search({
        view: view
    })

    view.ui.add(searchWidget, "top-left");

    function toggleButton(item) {
        const layerListEl = document.getElementsByClassName("esri-layer-list")[0]; // имената на променливите започват с малка буква
        let currentProp;
        const galleryEl = document.getElementsByClassName("esri-basemap-galley")[0];

        if (item == "LayerList") {
            currentProp = layerListEl.style.getPropertyValue("display");
            layerListEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
            galleryEl.style.setProperty("display", "none");
        } else if (item == "gallery") {
            currentProp = galleryEl.style.getPropertyValue("display");
            galleryEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
            layerListEl.style.setProperty("display", "none");
        }
    }

})