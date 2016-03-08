var tq84 = tq84 || {};

tq84.js_inkscape = function(svg_id) {

  this.svg=document.getElementById(svg_id);

  if (! this.svg) {
    alert('No elem for id ' + svg_id + ' found');
  }
  this.svgDoc=this.svg.contentDocument;
  if (! this.svgDoc) {
    alert('No svgDoc for id ' + svg_id + ' found');
  }

}

tq84.js_inkscape.prototype.svgAttribute = function (id_or_obj, name, value) {

  if (typeof(id_or_obj) == 'string') {
    var elem = this.svgDoc.getElementById(id_or_obj);
    if (elem === null) {
      alert ('No Element for id_or_obj ' + id_or_obj);
    }
    else {
      elem.setAttribute(name, value);
    }
  }
  else {
    id_or_obj.setAttribute(name, value);
  }

};

tq84.js_inkscape.prototype.show = function(id_or_obj) {
  this.svgAttribute(id_or_obj, 'visibility', 'visible');
};

tq84.js_inkscape.prototype.hide = function(id_or_obj) {
  this.svgAttribute(id_or_obj, 'visibility', 'hidden');
};
