function draw_id_cards(card_width, colour, text_group, text_pop) {
  var w = card_width,
      h = w/1.6,
      photo_margin = 0.05*w,
      corner_radius = 0.05*w,
      text_margin = photo_margin,
      photo_w = 0.3*w,
      photo_h = 0.75*h,
      head_radius = 0.33*photo_w,
      shoulder_radius = 0.39*photo_w,
      head_cy = photo_margin + 0.33*photo_h,
      font_size = 0.080*w,
      pop_font_size = 0.125*w,
      text_left = photo_margin + photo_w + text_margin;

  d3.select('.id-card-div').selectAll('svg').remove();
  d3.select('.id-card-div').selectAll('div').remove();

  var svg = d3.select('.id-card-div')
      .append('svg')
      .attr('class', 'id-card')
      .attr("width", w)
      .attr("height", h)
      .append("g");

  var card = svg.append('rect')
    .attr('class', 'card')
    .attr("width", w)
    .attr("height", h)
    .attr('rx', corner_radius)
    .attr('ry', corner_radius);

  var photo = svg.append('rect')
    .attr('class', 'photo')
    .attr('x', photo_margin)
    .attr('y', photo_margin)
    .attr('width', photo_w)
    .attr('height', photo_h);

  var head = svg.append('circle')
    .attr('class', 'person')
    .attr('cx', photo_margin + photo_w/2)
    .attr('cy', head_cy)
    .attr('r', head_radius);

  var body = svg.append('rect')
    .attr('class', 'person')
    .attr('x', photo_margin + 0.025*photo_w)
    .attr('y', head_cy + head_radius + 3)
    .attr('width', photo_w*0.95)
    .attr('height', photo_h)
    .attr('rx', shoulder_radius)
    .attr('ry', shoulder_radius);

  var text = d3.select('.id-card-div')
    .append('div')
    .attr('class', 'id-text')
    .style('left', text_left + 'px')
    .style('top', photo_margin + 'px')
    .style('width', (w/2) + 'px')
    .style('font-size', font_size + 'px')
    .html(text_group)

  var population = d3.select('.id-card-div')
    .append('div')
    .attr('class', 'id-pop')
    .style('left', text_left + 'px')
    .style('top', (photo_margin + photo_h - pop_font_size) + 'px')
    .style('width', (w/2) + 'px')
    .style('font-size', pop_font_size + 'px')
    .html(text_pop);

  d3.selectAll('.card').style('fill', colour);
  d3.selectAll('.person').style('fill', colour);

}