var map;var mgr;var icons={};var allmarkers=[];function load(){if(GBrowserIsCompatible()){map=new GMap2(document.getElementById("map"));map.addControl(new GLargeMapControl());map.addControl(new GOverviewMapControl());map.setCenter(new GLatLng(34.77042325672676,113.69484901428222),17);map.setMapType(G_NORMAL_MAP);map.enableDoubleClickZoom();mgr=new MarkerManager(map,{trackMarkers:true});window.setTimeout(setupOfficeMarkers,0)}}function getIcon(a){var c=null;if(a){if(icons[a[0]]){c=icons[a[0]]}else{c=new GIcon();c.image="/view/eye0/frame0/style0/image/"+a[0]+".png";var b=iconData[a[0]];c.iconSize=new GSize(b.width,b.height);c.iconAnchor=new GPoint(b.width>>1,b.height>>1);c.shadow="/view/eye0/frame0/style0/image/"+a[1]+".png";b=iconData[a[1]];c.shadowSize=new GSize(b.width,b.height);icons[a[0]]=c}}return c}function setupOfficeMarkers(){allmarkers.length=0;for(var f in officeLayer){var g=officeLayer[f];var c=[];for(var d in g.places){var b=g.places[d];var h=getIcon(b.icon);var k=b.name;var a=new GLatLng(b.posn[0],b.posn[1]);var e=createMarker(a,k,h);c.push(e);allmarkers.push(e)}mgr.addMarkers(c,g.zoom[0],g.zoom[1])}mgr.refresh()}function createMarker(d,c,b){var a=new GMarker(d,{title:c,icon:b,draggable:true});GEvent.addListener(a,"dblclick",function(){mgr.removeMarker(a)});return a}function deleteMarker(){var a=parseInt(document.getElementById("markerNum").value);mgr.removeMarker(allmarkers[a])}function clearMarkers(){mgr.clearMarkers()}function reloadMarkers(){setupOfficeMarkers()};