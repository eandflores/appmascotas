var args = arguments[0] || {};

var rows=[];

var data = [
	{img: 'mis-pedidos', text: 'Mis Pedidos'},
	{img: 'mis-direcciones', text: 'Mis Direcciones'},
	{img: 'notificaciones', text: 'Notificaciones'},
	{text: 'spacer'},
	{img: 'ayuda-telefonica', text: 'Ayuda telefónica'},
	{img: 'cerrar-sesion', text: 'Cerrar sesión'},
];

var row_h = 40;
var row = null;
for(i in data)
{
	row = Ti.UI.createTableViewRow({
	    height: row_h,
	    layout: "horizontal",
	    rowId: parseInt(i)+1
	});
	if(data[i].text != "spacer")
	{
		row.add(Ti.UI.createImageView({
		    image: "/img/menu/"+data[i].img+".png",
		    height: row_h-10,
		    left: 25,
		    top: 5
		}));
		row.add(Ti.UI.createLabel({
			left: 10,
			height: row_h,
			text: data[i].text,
			color:"#525252",
			font:{
				fontFamily:"Noto Sans",
				fontWeight:"bold",
				fontSize:15
			}
		}));
	} else {
		// Es separador, estiro
		row.height = 220;//"58%";
		row.selectionStyle = "none";
	}
	
	rows.push(row);
}
$.menu.separatorColor = "#ccc";
$.menu.data=rows;
$.menu.left = -15;
