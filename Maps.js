//Kenneth: I relocated the Maps onto this JS file. All Maps should be here to provide ease of access.
Chapter_1_Maps = [
	
	label, "Tutorial_Inv_Scene",
	//Moving Objects won't work. Instead, I'll create c-forms on moving scenes with huge bounding boxes.
	scene, {src:"Background Images/Final/diningroom_color_mess01.jpg", effect:"dissolve", objects:["Images/DatebookSprite.png", 310, 335]},
	audio, {bgm:"Music/dininghall", format:["ogg"]},
	set, {Datebook_clicked:false}, 
	set, {Hemlock_clicked:false},
	set, {Dish_clicked:false},
	set, {Table_clicked:false},
	set, {total_clues:0},
	
	jump, "CHAPTER1#Scene_3b",
	
	//First Investigation Scene is here
	
	//Coordinates might be off. This is because the object drawn onto the scene has an offset relative to the top left corner of the image, which is 796 x 504
	//Cform buttons take an offset from the top left corner of the viewport, aka 720 x 480
	label, "Inv_Scene_1.1",
	jump, {total_clues:2, label: "CHAPTER1#Exit_Inv_Scene_1.1"},
	macro, "Moving_Scenes_On",
	//Andy, don't forget to add the button for the journal in this cform as well. And this isn't a linear entry to the journal. This gives the player full access to it so make sure
	//it isn't glitchy like the first prototype presentation
	cform, ["Dining_1", true,
			button, {name:"Datebook", x:264, y:308.25, w:65, h: 61, base:"rgba(255, 255, 255, 0)", link:[jump, {Datebook_clicked:false, label:"Datebook_1st"}], showText:false},
			//button, {name:"Datebook", x:300, y:325, w:65, h:61, base:"rgba(255, 255, 255, 0)", link:[jump, {Datebook_clicked:true, label:"Datebook_2nd"}], showText:false},
			button, {name:"Hemlock", x:335.5, y:393.25, w:40, h: 40, base:"rgba(255, 255, 255, 0)", link:[jump, {Hemlock_clicked:false, label:"Hemlock_1st"}], showText:false},
			
			button, {name:"Broken Dish", x:490, y:360, w:60, h:55, base:"rgba(255, 255, 255, 0)", link:[jump, {Dish_clicked:false, label:"Dish_1st"}], showText:false},
			button, {name:"Table", x:305, y:245, w:60, h:55, base:"rgba(255, 255, 255, 0)", link:[jump, {Table_clicked:false, label:"Table_1st"}], showText:false},
			button, {name: "PopJournal", x:35, y: 0, w: 75, h: 76, base:"Images/journal_icon.png",
				link:[jump, "CHAPTER1#InventoryOpen"], showText: false},
			//No World Map button yet, as this is the tutorial scene and it is not necessary. And not gonna present that tomorrow either. 
			],
	
	jump, "Inv_Scene_1.1",
	
	label, "Datebook_1st",
	set, {Datebook_clicked:true},
	cform, "close",
	set, {total_clues:"+1"},
	box, {pos:"bottom", back:"image"},
	macro, "change_to_Thought",
	actor, {id:"Detective_Main", show:false, say:"This book....\n It seems to be an appointment book filled with appointments she has made up to her death."},
	actor, {id:"Detective_Main", show:false, say:"She seemed to be very active in charity related activites; most of these appointments are for various fundraisers and appointments."},
	macro, "change_to_Dialogue",
	text, {speaker:"Game", value:"You have added the datebook to your inventory!"},
	set, {clue2:true},
	box, {show:false},
	
	//scene, {src:"Background Images/Final/diningroom_color_mess01.jpg", effect:"dissolve"},
	jump, "Inv_Scene_1.1",
	
	label, "Hemlock_1st",
	set, {Hemlock_clicked:true},
	cform, "close",
	set, {total_clues:"+1"},
	box, {pos:"bottom", back:"image"},
	text, {align:"left", duration:0.1},
	macro, "Moving_Scenes_Off",
	actor, {id:"Detective_Main", nick:"Hawkshaw", color: "#f5f5f5", sprite:["MC", "Character Sprites/Final/DetectiveNeutralResize.png", "FLOOR"], position: "left"},
	actor, {id:"Detective_Main", say:"Hmm...excuse me, what did she eat before she collapsed?"},
	actor, {id:"Mayor", nick:"M. Calvin", color: "#f5f5f5", sprite:["M_Main", "Character Sprites/Final/MayorNeutralResize.png", "FLOOR"], position: "right"},
	actor, {id:"Mayor", say:"We'd just sat down for breakfast, but all she'd had was her morning tea before....she...."},
	actor, {id:"Detective_Main", say:"...I see."},
	text, {speaker:"Game", value:"The hemlock has been added to your inventory!"},
	set, {clue3:true},
	actor, {id:"Detective_Main", show:false},
	actor, {id:"Mayor", remove:"actor"},
	box, {show:false},
	jump, "Inv_Scene_1.1",
	
	label, "Dish_1st",
	set, {Dish_clicked:true},
	cform, "close",
	box, {pos:"bottom", back:"image"},
	text, {align:"left", duration:0.1},
	macro, "change_to_Thought",
	actor, {id:"Detective_Main", show:false, say:"This dish lies on the ground, broken. Perhaps the victim violently struggled before she died."},
	macro, "change_to_Dialogue",
	box, {show:false},
	jump, "Inv_Scene_1.1",
	
	label, "Table_1st",
	set, {Table_clicked:true},
	cform, "close",
	box, {pos:"bottom", back:"image"},
	text, {align:"left", duration:0.1},
	macro, "change_to_Thought",
	actor, {id:"Detective_Main", show:false, say:"Fallen glass cups on the dining table. Perhaps the victim violently struggled before she died."},
	macro, "change_to_Dialogue",
	box, {show:false},
	jump, "Inv_Scene_1.1",
	
	////////////////////
	//Free Roam part
	label, "Mayor_Mansion_Map_0",
	scene, {src:"Background Images/Final/MansionMap.png", effect:"dissolve"},
	box, {show:false},
	jump, {jump_to_Conclusion:true, label:"CHAPTER1#Chapter_1_Conclusion"}, //New Line of Code, Copy this!
	label, "Mayor_Mansion_Map_1",
	cform, ["Mansion_Map", true,
			button, {name:"Foyer", x:320, y:290, w:100,h:100, base:"rgba(255, 255, 255, 0)", link:[jump, "loc_M_Foyer"], showText:false},
			button, {name:"Dining_Hall", x:610, y:210, w:100, h:100, base:"rgba(255, 255, 255, 0)", link:[jump, "loc_M_Dining_Hall"], showText:false},
			button, {name:"Kitchen", x:585, y:25, w:100, h:100, base:"rgba(255, 255, 255, 0)", link:[jump, "loc_M_Kitchen"], showText:false},
			button, {name:"Town_Street", x:435, y:375, w:100, h:100, base:"rgba(255, 255, 255, 0)", link:[jump, "loc_Town_Streets"], showText:false},
			],
			
	jump, "Mayor_Mansion_Map_1",
	////////////////////
	
	label, "loc_M_Foyer",
	audio, {bgm:"Music/foyer", format:["ogg"]},
	cform, "close",
	set, {current_Location:"Foyer"},
	scene, {src:"Background Images/Final/foyer_color01.jpg", effect:"dissolve"},
	jump, "General_Interface",
	
	label, "Removing_Foyer_Actors",
	jump, "return_To_Mansion_Map_02",
	
	////////////
	label, "General_Interface",
	
	cform, ["G_Interface", true,
			//Button for Journal
			button, {name: "PopJournal", x:100, y: 0, w: 75, h: 76, base:"Images/journal_icon.png",
				link:[jump, "CHAPTER1#InventoryOpen"], showText: false},
			button, {name:"Investigate_Mode", x:640, y:0, w:75, h:76, base:"Images/InvestigateIcon.png", link:[jump, "Decide_Location"], showText:false},
			button, {name:"return_to_W.Map", x:0, y:0, w:75, h:76, base:"Images/worldmap_icon.png", link:[jump, "return_To_Mansion_Map_01"], showText:false},
			button, {name:"InterrogateSuspect", x: 300, y:150, w:150, h: 300, base:"rgba(255,255,255, 0)", link:[jump, "goTo"], showText:false},
				],
	jump, "General_Interface",
	//kenneth I don't know where to jump to from here to get to the maid's interrogation
	label, "goTo",
	jump, {current_Location:"Kitchen", label:"Maid_1st"},
	jump, {current_Location:"Foyer", label:""},
	jump, {current_Location:"Town Streets", label:"Ask_Pickpocket_Again"}, //New Line of Code, Copy this!
	jump, "goTo",
	

	////////////
	label, "return_To_Mansion_Map_01",
	cform, "close",
	jump, {current_Location:"Foyer", label:"Removing_Foyer_Actors"},
	jump, {current_Location:"Kitchen", label:"Removing_Kitchen_Actors"},
	jump, {current_Location:"Town Streets", label:"Removing_Town_Street_Actors"},
	
	label, "return_To_Mansion_Map_02",
	jump, "Mayor_Mansion_Map_0",
	
	label, "Decide_Location",
	cform, "close",
	jump, {current_Location:"Foyer", label:"Foyer_Invs"},
	jump, {current_Location:"Dining Hall", label:"Dining_Invs"},
	jump, {current_Location:"Kitchen", label:"Kitchen_Invs"},
	jump, {current_Location:"Town Streets", label:"Town_Street_Invs"}, //New Line of Code. Copy!

	
	jump, "Decide_Location", //In case jumping fails?
	
	//Dining Hall
	label, "loc_M_Dining_Hall",
	audio, {bgm:"Music/dininghall", format:["ogg"]},
	cform, "close",
	set, {current_Location:"Dining Hall"},
	scene, {src:"Background Images/Final/diningroom_noHemlock.jpg", effect:"dissolve"},
	jump, {Dining_Hall_1st_Time:false, label:"Dining_Hall_1st"},
	jump, {Dining_Hall_1st_Time:true, label:"Dining Hall_2nd"},
	
	label, "Dining_Hall_1st",
	set, {Dining_Hall_1st_Time:true},
	box, {pos:"bottom", back:"image"},
	macro, "change_to_Thought",
	actor, {id:"Detective_Main", show:false, say:"(The Dining Room still remains untouched since I last visited...)"},
	macro, "change_to_Dialogue",
	box, {show:false},
	
	label, "Dining_Hall_2nd",
	jump, "General_Interface",
	
	label, "Dining_Invs",
	macro, "Moving_Scenes_On",
	cform, ["Dining_2", true,
			button, {name:"Hemlock", x:335.5, y:393.25, w:40, h: 40, base:"rgba(255, 255, 255, 0)", link:[jump, {Hemlock_clicked:false, label:"Hemlock_2nd"}], showText:false},
			button, {name:"Broken Dish", x:490, y:360, w:60, h:55, base:"rgba(255, 255, 255, 0)", link:[jump, {Dish_clicked:false, label:"Dish_2nd"}], showText:false},
			button, {name:"Table", x:305, y:245, w:60, h:55, base:"rgba(255, 255, 255, 0)", link:[jump, {Table_clicked:false, label:"Table_2nd"}], showText:false},
			button, {name:"Exit_Invs", x:640, y:0, w:75, h:75, base:"Images/InvestigateIcon.png", link:[jump, "Dining_End_Invs"], showText:false},
			],
	jump, "Dining_Invs",
	
	label, "Hemlock_2nd",
	cform, "close",
	set, {Hemlock_clicked:true},
	box, {pos:"bottom", back:"image"},
	macro, "change_to_Thought", //New Line of Code. Copy it!
	actor, {id:"Detective_Main", show:false, say:"(Hemlock, the substance that took the Mayor's Wife, Rachel Lind, away. Best to leave it here.)"},
	macro, "change_to_Dialogue", //New Line of Code. Copy it!
	box, {show:false},
	jump, "Dining_Invs",
	
	label, "Dish_2nd",
	set, {Dish_clicked:true},
	cform, "close",
	box, {pos:"bottom", back:"image"},
	text, {align:"left", duration:0.1},
	macro, "change_to_Thought",
	actor, {id:"Detective_Main", show:false, say:"This dish lies on the ground, broken.  Such a shame, it has such a nice pattern."},
	macro, "change_to_Dialogue",
	box, {show:false},
	jump, "Dining_Invs",
	
	label, "Table_2nd",
	set, {Table_clicked:true},
	cform, "close",
	box, {pos:"bottom", back:"image"},
	text, {align:"left", duration:0.1},
	macro, "change_to_Thought",
	actor, {id:"Detective_Main", show:false, say:"Fallen glass cups on the dining table.  I suppose her death wasn't exactly peaceful."},
	macro, "change_to_Dialogue",
	box, {show:false},
	jump, "Dining_Invs",
	
	label, "Dining_End_Invs",
	cform, "close",
	macro, "Moving_Scenes_Off",
	jump, "General_Interface",

	label, "loc_M_Kitchen",
	audio, {bgm:"Music/church", format:["ogg"]},
	cform, "close",
	set, {current_Location:"Kitchen"},
	set, {activescene1:false, activescene2:false, activescene3:false, activescene4:false, activescene5:true, activescene6:false},
	jump, {Kitchen_1st_Time:false, label:"Kitchen_1st"},
	jump, {Kitchen_1st_Time:true, clue4:true, label:"Kitchen_2ndClueFound"},
	jump, {Kitchen_1st_Time:true, label:"Kitchen_2nd"},

	
	label, "Kitchen_1st",
	set, {Kitchen_1st_Time:true},
	scene, {src:"Background Images/Final/kitchen_color01.jpg", effect:"dissolve"},
	actor, {id:"Maid", nick:"Leah", color:"#f5f5f5", sprite:["Maid_01", "Character Sprites/Final/MaidNeutralResize.png", "FLOOR"], position:"center"},
	box, {pos:"bottom", back:"image"},
	macro, "change_to_Thought",
	actor, {id:"Detective_Main", show:false, say:"(This is the Kitchen of Mayor Bungle's Mansion. It looks clean and well kept. The maid of the mansion seems to be here. Perhaps I should speak to her.)"},
	macro, "change_to_Dialogue",
	box, {show:false},
	jump, "General_Interface",
	
	label, "Kitchen_2nd",
	scene, {src:"Background Images/Final/kitchen_color01.jpg", effect:"dissolve"},
	actor, {id:"Maid", nick:"Leah", color:"#f5f5f5", sprite:["Maid_01", "Character Sprites/Final/MaidNeutralResize.png", "FLOOR"], position:"center"},
	jump, "General_Interface",
	
	label, "Kitchen_2ndClueFound",
	scene, {src:"Background Images/Final/kitchen_color02.jpg", effect:"dissolve"},
	actor, {id:"Maid", nick:"Leah", color:"#f5f5f5", sprite:["Maid_01", "Character Sprites/Final/MaidNeutralResize.png", "FLOOR"], position:"center"},
	jump, "General_Interface",
		
	//Foyer
	label, "Foyer_Invs",
	macro, "Moving_Scenes_On",
	cform, ["Foyer_1", true,
			button, {name:"Exit_Invs", x:640, y:0, w:75, h:75, base:"Images/InvestigateIcon.png", link:[jump, "Foyer_End_Invs"], showText:false},
			],
	jump, "Foyer_Invs",
	
	label, "Foyer_End_Invs",
	cform, "close",
	macro, "Moving_Scenes_Off",
	jump, "General_Interface",
	
	//Kitchen

	label, "Kitchen_Invs",
	actor, {id:"Maid", show:false}, //New Code. Copy!
	macro, "Moving_Scenes_On",
	set, {correctitem3:true, activescene3:false, activescene4:false, activescene5:true, interrogationmode:false},
	cform, ["Kitchen_1", true,
			button, {name:"Broken Glass", x:565, y:200, w:30, h:50, base:"rgba(255, 255, 255, 0)", link:[jump, {broken_Cup_clicked:false, label:"Broken_Glass_1"}], showText:false},
			button, {name:"Exit_Invs", x:640, y:0, w:75, h:75, base:"Images/InvestigateIcon.png", link:[jump, "Kitchen_End_Invs"], showText:false},
			],
	jump, "Kitchen_Invs",
	
	label, "Broken_Glass_1",
	set, {broken_Cup_clicked:true},
	box, {pos:"bottom", back:"image"},
	macro, "change_to_Thought",
	actor, {id:"Detective_Main", show:false, say:"(A broken glass.  It hasn't been broken recently; it's dry, but dirty.  I wonder who broke it?)"}, //Mckenna says the broken glass might be used later.
	text, {value:"\nThe broken glass has been added to the inventory!"},
	set, {clue4:true},
	macro, "change_to_Dialogue",
	box, {show:false},
	jump, "Kitchen_Invs",
	
	label, "Kitchen_End_Invs",
	cform, "close",
	macro, "Moving_Scenes_Off",
	actor, {id:"Maid", show:true},
	jump, "General_Interface",
	
	label, "Maid_1st",
	cform, "close",
	macro, "Moving_Scenes_Off",
	jump, {Maid_1st_Invs:true, label:"CHAPTER1#Maid_2nd"},
	set, {Maid_1st_Invs:true},
	jump, "CHAPTER1#Maid_Interrogation",
	
	//Removes the Maid Sprite when return to the Mansion Map. A special case
	label, "Removing_Kitchen_Actors",
	actor, {id:"Maid", remove:"actor"},
	jump, "return_To_Mansion_Map_02",
	
	label, "Removing_Town_Street_Actors",
	actor, {id:"Pickpocket", remove:"actor"},
	jump, "return_To_Mansion_Map_02",
	
	label, "loc_Town_Streets",
	audio, {bgm:"Music/town", format:["ogg"]},
	cform, "close",
	set, {current_Location:"Town Streets"},
	scene, {src:"Background Images/Final/town_color01.jpg", effect:"dissolve"},
	jump, {Pickpocket_1st_Invs:true, label:"Pickpocket_in_town"},
	actor, {id:"Pickpocket", nick:"Dipper", color:"#f5f5f5", sprite:["PickP_01", "Character Sprites/Final/PickpocketNeutralResize.png", "FLOOR"], position:"center", show:false},
	set, {Pickpocket_1st_Invs:true},
	jump, "CHAPTER1#Pickpocket_1st_Event",
	
	label, "Pickpocket_in_town",
	actor, {id:"Pickpocket", nick:"Dipper", color:"#f5f5f5", sprite:["PickP_01", "Character Sprites/Final/PickpocketNeutralResize.png", "FLOOR"], position:"center", show:true},
	label, "Pickpocket_return",
	set, {activescene7:true, activescene6:false, activescene5:false, activescene4:false, activescene3:false, activescene2:false, activescene1:false},
	jump, "General_Interface",
	
	label, "Ask_Pickpocket_Again",
	cform, "close",
	jump, "CHAPTER1#Pickpocket_Again",
	
	label, "Town_Street_Invs",
	macro, "Moving_Scenes_On",
	actor, {id:"Pickpocket", show:false},
	cform, ["Town_Invs", true,
			button, {name:"Exit_Invs", x:640, y:0, w:75, h:75, base:"Images/InvestigateIcon.png", link:[jump, "Town_Streets_End_Invs"], showText:false},
	],
	jump, "Town_Street_Invs",
	
	label, "Town_Streets_End_Invs",
	cform, "close",
	macro, "Moving_Scenes_Off",
	actor, {id:"Pickpocket", show:true},
	jump, "General_Interface",
	
	
	/*
	label, "MayorHomeIntro",
	overlay, {src:"Background Images/Guildhall.jpg"},
	box, {pos: "bottom", back: "dim"},
	text, {align: "bottom", value:"Okay, I'm outside of the mayor's manor.", duration:5},
	text, {align: "bottom", value:"Let's find some clues.", duration: 3},
	box, {show: false},
	
	
	//Placing boolean values here for seeing clues or not.
	set, {seen_clue_1: false},

	//Mayor Map, image is filler
	label, "Mayor_Map",
	cform, ["Mayor's Manor", true,
		//picture, {name:"World_Image", x: 0, y: 0, frames:["Background Images/Guildhall.jpg"]},
		button, {name: "Clue_1", x:200, y: 400, w: 30, h: 30, base:"rgba(225, 0, 100, 0)", hover:"rgba(227, 221, 204, 0.5)",
			link:[jump, {seen_clue_1:false, label:"clue_1_not_seen"}], showText: false},
		button, {name: "Clue_1", x:200, y: 400, w: 30, h: 30, base:"rgba(225, 0, 100, 0)", hover:"rgba(227, 221, 204, 0.5)",
			link:[jump, {seen_clue_1:true, label:"clue_1_seen"}], showText: false},
			
		button, {name: "return_to_world", x:0, y: 0, w: 30, h: 30, base:"rgba(225, 0, 100, 0)", hover:"rgba(227, 221, 204, 0.5)",
			link:[jump, "back_to_world_Map"], showText: false},
			
		button, {name: "PopJournal", x:35, y: 0, w: 30, h: 30, base:"rgba(225, 0, 100, 0.25)", hover:"rgba(227, 221, 204, 0.5)",
			link:[jump, "openJournal"], showText: false},			
		],
	jump, "Mayor_Map",
	
	label, "back_to_world_Map",
	cform, "close",
	jump, "world_Map#back_to_world",
	
	label, "openJournal",
	cform, "close",
	jump, "journal#journalShow",
	
	//filler clue for now
	label, "clue_1_not_seen",
	box, {pos: "bottom", back:"dim"},
	text, {align:"bottom", value:"Hmm. Seems like there are footprints here.\nCould this be the culprit's footprints?", 
		duration: 5, font: "normal 18px 'Courier New' white"},
	text, {align:"bottom", value:"and they seem fresh. Maybe this was the escape route?\nI'll add this to my journal.", 
		duration: 5, font: "normal 18px 'Courier New' white"},
		box, {show: false},
		set, {seen_clue_1:true},
	jump, "Mayor_Map",
	
	
	label, "clue_1_seen",
	box, {pos: "bottom", back:"dim"},
	text, {align:"bottom", value:"I have already found this clue...\nBest to look elsewhere.", 
		duration: 5, font: "normal 18px 'Courier New' white"},
	box, {show: false},
	jump, "Mayor_Map",
		*/
];

