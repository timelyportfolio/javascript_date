
function getEndPeriod( data, format, dateVar ){
  dateVar =  dateVar ? dateVar : "date";
  format = format ? format : function(dt){ return dt.getMonth() };

  var endData=[];

  data.sort(function(a, b) {
    return new Date(a[dateVar]).valueOf() < new Date(b[dateVar]).valueOf() ? -1 : new Date(a[dateVar]).valueOf() > new Date(b[dateVar]).valueOf() ? 1 : 0; 
  }).forEach(function(d){
    d[dateVar] = new Date(d[dateVar]);
  })

  data.slice(0,data.length-2).forEach(function(d,i){
    if(format(d[dateVar]) != format(data[i+1][dateVar])) endData.push( d )
  })
  
  return endData;
}

//built so should be able to supply any formatting, so hand built or d3 or moment.js
// an example for quarters
function getQ(dt){return Math.floor(dt.getMonth() / 3) + 1 }
// an example for decades
function getDecade(dt){return Math.floor( dt.getYear() / 10) * 10 + 1900}

