requestAnimationFrame([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapToggle",
    "esri-widgets/BasemapGallery"
], (esriconfig, WebMap, MapView, ScaleBar, Legend, Home, LayerList, BasemapToggle, BasemapGallery)=>{
    esriconfig.apikey="AAPK8b13c968054241359f234e78c7b004eefkKbVO9Hk6bBGOoBlPNrS5lFTXkOoZcQ4fo5j0eYOrMTRD_k5EhLbkVobAnOfCv0";

    const webMap=new WebMap({
        portalItem:{
            id:"232b4d297d054b2a831a3ce629ac8495"
        }

    })
    const view=new MapView({
        container:"viewDiv",
        map:WebMap

    })
    const homeBtn=new Home({
        view:view
    })

    view.ui.add(homeBtn, "top-left");

    const Legend=new Legend({
        view:view

    })
    view.ui.add(Legend, "bottom-left");

    const scaleBar=new ScaleBar({
        view:view,
        unit:"metric",
        style:"ruler"
    })

    view.ui.add(scaleBar, "bottom-right");

    view.ui.add("LayerList-btn", "top-right");
    view.ui.add("basemap-btn", "top-right");

    const basemapToggle=new BasemapToggle({
        view:view,
        nextBasemap: "arcgis-imagery"
    })

    const basemapGalley=new BasemapGallery({
        view:view,
        source:{
            query:{

            }
        },
    })

    view.ui.add(basemapGalley, "top-right");

    view.ui.add(basemapToggle, "bottom-right");

    const LayerList=new LayerList({
        view:view
    })

    view.ui.add(LayerList, "top-right");

    document
    .getElementById("LayerList-btn")
    .addEventListener("click", function() {
        toggleButton()
    })

    function toggleButton(){
        const LayerListEl=document.getElementsByClassName("esri-layer-list")[0];
        let currentProp=LayerListEl.style.getPropertyValue("display");

        LayerListEl.style.setProperty("display", currentProp=="block"? "none":"block");
    }

})