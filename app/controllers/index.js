
var win = Ti.UI.createWindow({
	backgroundColor: 'white'
});

var view = Ti.UI.createView();

var image01 = Ti.UI.createImageView({
	image:'images/brad_pitt-75.jpg',
	width: 150,
	borderColor: 'grey',
	borderWidth: 2,
	top: 35,
	left: 30
});

var image02 = Ti.UI.createImageView({
	image:'images/db.jpg',
	width: 150,
	borderColor: 'grey',
	borderWidth: 2,
	top: 35,
	left: 185
});

var image03 = Ti.UI.createImageView({
	image:'images/david-beckham.jpg',
	width: 150,
	borderColor: 'grey',
	borderWidth: 2,
	top: 190,
	left: 30
});

var image04 = Ti.UI.createImageView({
	image:'images/add.png',
	width: 150,
	borderColor: 'grey',
	borderWidth: 2,
	top: 190,
	left: 185
});

var distance_slider = Ti.UI.createSlider({
	height: 'auto',
	width: 300,
	top: 380,
	min: 0,
	max: 100
});

var age_slider = Ti.UI.createSlider({
	height: 'auto',
	width: 300,
	top: 445,
	min: 0,
	max: 80
});

var distance_label = Ti.UI.createLabel({
	text: "whats your distance preference",
	height: 40,
	width: 'auto',
	top:400
});

var age_label = Ti.UI.createLabel({
	text: "whats your age preference",
	height: 40,
	width: 'auto',
	top:460
});

distance_slider.addEventListener('change', function(e){
	distance_label.text = e.value;
});

age_slider.addEventListener('change', function(e){
	age_label.text = e.value;
});

// gender preferences ******** IOS ONLY ********
var table1 =  Titanium.UI.createTableView({
	top: 500,
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED
});

var section1 = Titanium.UI.createTableViewSection();
section1.headerTitle = "Gender";
var row1 = Titanium.UI.createTableViewRow({title:"Male"});
var row2 = Titanium.UI.createTableViewRow({title:"Female"});
section1.add(row1);
section1.add(row2);
table1.setData([section1]);
//***********************************************


// adding images to view
view.add(image01);
view.add(image02);
view.add(image03);
view.add(image04);

// adding slider 
view.add(distance_slider);
view.add(age_slider);

// adding slider number
view.add(distance_label);
view.add(age_label);

// adding gender preferences
view.add(table1);

// initiating view to window
win.add(view);

win.open();
