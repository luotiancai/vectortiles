
//在线
// var url = "https://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token={k}";
// var key = "pk.eyJ1IjoidWN6bHRsdSIsImEiOiJjam4zOXgzeHkyY2ZhM2txbG81eTY5cHgxIn0.fTjC7nPLAXEfR7fSxU9XFw";

//离线
var url = "http://localhost:8080/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=tms:river&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"
var mvtLayer = createMVTWithStyle(Cesium, ol, createMapboxStreetsV6Style, {
    url: url,
    // key: key
});
var viewer = new Cesium.Viewer('cesiumContainer', {
    // imageryProvider: mvtLayer,
    terrianProvider: false,
    baseLayerPicker: false,
    timeline: false,
    animation: false,
    navigationHelpButton: false,
    homeButton: false,
    sceneModePicker: false,
    geocoder: false,
    fullscreenButton: false,
    selectionIndicator: false
});
viewer.scene.imageryLayers.addImageryProvider(mvtLayer)
viewer.scene.globe.baseColor = new Cesium.Color(1.0, 1.0, 1.0, 1.0);
// 除去cesium标志
viewer._cesiumWidget._creditContainer.style.display = 'none'