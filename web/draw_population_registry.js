function draw_population_registry(left_margin_pop, top_margin_pop) {
  
  d3.select('#pop_registry').style('margin-left', left_margin_pop + 'px');
  d3.select('#pop_registry').style('margin-top', top_margin_pop + 'px');

    var house_h = 150,
      house_w = 1.6*house_h,
      card_h = 0.75*house_h,
      card_w = 1.6*card_h,
      svg_h = 1.9*house_h,
      svg_w = 2.1*house_h;

  var card_margin = {top: 0, left: 0.45*house_h},
      house_margin = {top: card_h, left: 0.25*house_h};

  var photo_margin = 0.05*card_w,
      corner_radius = 0.05*card_w,
      photo_w = 0.3*card_w,
      photo_h = 0.75*card_h,
      head_radius = 0.33*photo_w,
      shoulder_radius = 0.39*photo_w,
      head_cy = photo_margin + photo_h/3;

  var svg = d3.select("#pop_registry").append("svg")
      .attr("width", svg_w)
      .attr("height", svg_h);

  var g_card = svg.append("g")
      .attr("transform", "translate(" + card_margin.left + "," + card_margin.top + ")");

  var g_house = svg.append("g")
      .attr("transform", "translate(" + house_margin.left + "," + house_margin.top + ")");

  g_card.append('rect')
    .attr("width", card_w)
    .attr("height", card_h)
    .attr('rx', corner_radius)
    .attr('ry', corner_radius)
    .attr('stroke', '#949599')
    .attr('stroke-width', 1)
    .style('fill', '#FFFDFF');

  g_card.append('circle')
    .attr('cx', photo_margin + photo_w/2)
    .attr('cy', head_cy)
    .attr('r', head_radius)
    .attr('fill', '#949599');

  g_card.append('rect')
    .attr('x', photo_margin + 0.025*photo_w)
    .attr('y', head_cy + head_radius + 3)
    .attr('width', photo_w*0.95)
    .attr('height', 0.7*photo_h)
    .attr('rx', shoulder_radius)
    .attr('ry', shoulder_radius)
    .attr('fill', '#949599');

  function draw_hline(x1, x2, y) {
    g_card.append('line')
      .attr('x1', x1)
      .attr('x2', x2)
      .attr('y1', y)
      .attr('y2', y)
      .attr('stroke', '#949599')
      .attr('stroke-width', 1);
    }

  draw_hline(0.4*card_w, 0.93*card_w, 0.2*card_h);
  draw_hline(0.4*card_w, 0.93*card_w, 0.35*card_h);
  draw_hline(0.4*card_w, 0.93*card_w, 0.5*card_h);

  g_house.append('rect')
    .attr('id', 'house-rect')
    .attr('width', house_w)
    .attr('height', house_h)
    .attr('fill', '#3A3A3C')
    .attr('stroke', '#5B5B5D')
    .attr('stroke-width', 0.05*house_h);

  g_house.append('rect')
    .attr('width', 1.1*house_w)
    .attr('height', 0.1*house_h)
    .attr('y', house_h + 0.025*house_h)
    .attr('x', -0.05*house_w)
    .attr('fill', '#3A3A3C');

  g_house.append('polygon')
    .attr('points', (house_w/2) + ',' +(-0.3*house_h) + ' ' + (house_w+30) + ',0 ' + (-30) + ',0')
    .attr('fill', '#3A3A3C')
    .attr('stroke', '#5B5B5D')
    .attr('stroke-width', 0.05*house_h);

  function add_text(text, y) {
    g_house.append('text')
      .attr('class', 'registry-text')
      .attr('text-anchor', 'middle')
      .attr('x', house_w/2)
      .attr('y', y)
      .attr('font-size', 0.2*house_h)
      .text(text);
  }

  add_text('ISRAELI', 0.35*house_h);
  add_text('POPULATION', 0.575*house_h);
  add_text('REGISTRY', 0.8*house_h);
}