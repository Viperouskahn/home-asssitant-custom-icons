var icons = {
  "example_circle":[0,0,100,100,"M 5.0, 50.0 a 45.0,45.0 0 1,0 90.0,0 a 45.0,45.0 0 1,0 -90.0,0 "],
  "example_ellipse":[0,0,200,200,"M200.0 100.0 A100.0 50.0 0 0 1 100.0 150.0 A100.0 50.0 0 0 1 0.0 100.0 A100.0 50.0 0 0 1 200.0 100.0 z "],
  "example_multi":[0,0,100,100,"M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 Z M 50 30 A 20 20 0 1 1 50 70 A 20 20 0 1 1 50 30 Z M0,100 50,25 50,75 100,0 "],
  "example_path":[0,0,100,100,"M 10,30            A 20,20 0,0,1 50,30            A 20,20 0,0,1 90,30            Q 90,60 50,90            Q 10,60 10,30 z "],
  "example_polygon":[0,0,210,210,"M100,10 40,198 190,78 10,78 160,198z "],
  "example_polyline":[0,0,100,100,"M0,100 50,25 50,75 100,0 "],
  "example_rect":[0,0,100,100,"M10.0 10.0 H90.0 V90.0 H10.0 V10.0z "],
  "home":[0,0,192.00,192.00,"M22 169.54v-76.2c0-4.99.97-9.94 3-14.5.03-.07.06-.14.1-.22 2.59-5.75 6.78-10.62 11.92-14.27L96 22.46l59.23 42.06c5.1 3.62 9.26 8.45 11.84 14.15l.09.21c1.96 4.42 2.84 9.24 2.84 14.07v76.59h-41.62v-65.68L96 76.45l-32.38 27.41v65.68H22Z "],
  }

async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return '';
  }

  var svgDef = icons[name];
  var primaryPath = svgDef[4];
  return {
    path: primaryPath,
    viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  }

}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["custom"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["custom"] = { getIcon, getIconList };
