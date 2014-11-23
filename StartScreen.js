titleScreen = [
	label, "title",
	scene, {src:"black"},
	
	box, {pos:"center", back: "none"},
	text, {align:"center", value:"A Team Common Heroes Production", effect:"fade", duration:2},
	text, {value:"Hawkshaw Mysteries", effect:"fade", duration:2},
	text, {value:"A Murder Mystery Adventure Visual Novel\nbased on the poem\n'The Genius of the Crowd' by Charles Bukowski", effect:"fade", duration:4},

	box, {show:false},
	
	
	
	macro, "change_to_Dialogue",
	jump, "CHAPTER1#START01",
	message, "Shouldn't see this...", //Debugging
];

//Functions have been moved to a seperate js file called gameFunc.js