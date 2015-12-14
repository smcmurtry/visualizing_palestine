function draw_vote_box(svg_width) {

  var box_len = 0.55*svg_width,
      margin = 0.45*box_len,
      font_size = 0.3*box_len,
      x_size = 3.0*box_len,
      ballot_h = 0.3*box_len,
      ballot_w = 0.6*box_len,
      ballot_border = 2;

  var svg = d3.selectAll('.vote-svg')
    .append('svg')
    .attr('width', svg_width)
    .attr('height', 1.6*box_len);

  svg.append('g')
     .attr("transform", "translate(" + (margin + (box_len-ballot_w)/2) + "," + (margin-ballot_h+ballot_border/2) + ")")
     .append('rect')
     .attr('fill', 'white')  
     .attr('width', ballot_w)
     .attr('height', ballot_h)
     .attr('stroke', '#6D6E72')
     .attr('stroke-width', ballot_border);

  var g = svg.append("g")
      .attr("transform", "translate(" + margin + "," + margin + ")");

  g.append('rect')
    .attr('width', box_len)
    .attr('height', box_len)
    .attr('fill', '#6D6E72')

  g.append('text')
    .attr('text-anchor', 'middle')
    .attr('x', box_len/2)
    .attr('y', (box_len + font_size - 8)/2)
    .attr('fill', 'white')
    .attr('font-size', font_size)
    .attr('font-family', 'Effra_Std_Rg, sans-serif')
    .text('VOTE');

  g.append('g')
    .append('text')
    .attr('class', 'cross')
    .attr('fill', 'red')
    .attr('font-size', x_size)
    .attr('text-anchor', 'middle')
    .attr('x', box_len/2)
    .attr('y', box_len+3)
    .attr('opacity', 0.9)
    .attr('font-family', 'Effra_Std_Rg, sans-serif')
    .text('x');
}