function draw_vote_box() {

  var margin = 50,
      box_len = 100,
      font_size = 30,
      x_size = 340,
      ballot_h = 30,
      ballot_w = 60,
      ballot_border = 2;

  var svg = d3.select('.vote-svg').append('svg')
    .attr('width', 200)
    .attr('height', 200)

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
    .attr('y', box_len+15)
    .attr('opacity', 0.9)
    .attr('font-family', 'Effra_Std_Rg, sans-serif')
    .text('x');
}