const input = `
6377
1852
4254
1419
1504
    
7127
8649
2523
8023
3063
2677
1759
8632
7805
2999
    
3419
1111
5599
1055
3407
4964
3556
7249
1100
7148
1852
1549
    
5414
11474
1685
8818
10288
6138
1983
    
23129
2195
    
3104
1599
2327
3640
2230
2791
2344
1035
1046
3399
5096
1067
1987
5786
1395
    
32647
10609
    
6020
2279
8718
3103
7022
6464
6180
3968
3275
    
3221
5381
6110
1860
4557
4705
3658
4172
5002
5578
1355
4114
3501
4821
    
1312
1921
2644
5044
3336
4520
1253
3184
3732
6754
2139
`

const inputToArray = input.split('\n').reduce((acc, curr) => {
  if(isNaN(Number(curr))){
    acc.push([])
  }
    console.log(curr, acc)
  //acc[acc.length - 1].push(Number(curr))
},[[]])