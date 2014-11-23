//Fonts run on the Config File. This function, called through macro, will change the boxFontStyle from config for our text.
//For dialogue
function change_to_Dialogue() {
	Config.activeTheme = Theme2;
	
	Helper.configUpdate("activeTheme");

}
//For Transitions/Titles
function change_to_Title() {
	Config.activeTheme = Theme1;
	
	Helper.configUpdate("activeTheme");
	
}
//For Thoughts
function change_to_Thought() {
	Config.activeTheme = Theme3;
	
	Helper.configUpdate("activeTheme");
	
}
//For Menu Listings
function change_to_Menu() {
	Config.activeTheme = Theme4;
	
	Helper.configUpdate("activeTheme");
	
}


function Moving_Scenes_On() {
	Config.actorPerspective = true;
	
	Helper.configUpdate("actorPerspective");
	
}

function Moving_Scenes_Off() {
	Config.actorPerspective = false;
	
	Helper.configUpdate("actorPerspective");
}
