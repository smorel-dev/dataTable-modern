
/*****************
 * DataTable 1
 ****************/
const dataSet = [
  ['Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800'],
  ['Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750'],
  ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000'],
  ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060'],
  ['Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700'],
];

dataSet.forEach(r => {
  var div1 = document.createElement('div');
  div1.innerHTML = r[1];
  r[1] = div1;

  var div3 = document.createElement('div');
  div3.innerHTML = r[3];
  r[3] = div3;
})

new DataTable('#data-table-1', {
  lengthChange: false,
  searching: false,
  columns: [
      { title: 'Name' },
      { title: 'Position' },
      { title: 'Office' },
      { title: 'Extn.' },
      { title: 'Start date' },
      { title: 'Salary' }
  ],
  data: dataSet
});


/*****************
 * DataTable 2
 ****************/
const getPhotos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  return res.json();
}

$(document).ready(function() {

  (async function () {
    const dataSet = await getPhotos();
    //console.log(dataSet);

    table = $('#data-table-2').DataTable({
      lengthChange: false,
      searching: false,
      data: dataSet,
      columns : [
        {data: "albumId", title: 'Album ID'},
        {data: "id", title: 'ID'},
        {data: "thumbnailUrl", title: 'Thumbnail'},
        {data: "title", title: 'Title'},
        {data: "url", title: 'Image URL'},
      ],
      columnDefs: [{
          targets: 0,
          className: 'col-albumId'
        },{
          targets: 1,
          className: 'col-id'
        },{
          targets: 2,
          className: 'col-thumbnailUrl',
          data: 'thumbnailUrl',
          render: function (data, type, row, meta) {
              return '<img src="' + data + '" alt="' + data + '"height="16" width="16"/>';
          }
        },{
          targets: 3,
          className: 'col-title'
        },{
          targets: 4,
          className: 'col-url'
        }
      ],
    })
  })();

});
