// Globals for configuration
Theme1 = {
	formFontStyle:		"bold 16px 'Courier New' #404040",
	formElementBack:	"#FFFFE0",
	formTipColor:		"#FFFFE0",
	formTipStyle:		"normal 12px sans-serif black",
	
	boxFontStyle:		"bold 30px 'Myriad Pro' white",
	boxDimStyle:		"#000000 #808080",
	boxImageStyle:		"Images/TextInterfaceBlank.png",
	boxTagStyle:		"bold 16px 'Myriad Pro' white",
	boxMenuHilite:		"#c08040",
	
	balloonFillStyle:	"#000000 #808080",
	balloonStrokeStyle: "#FFFFFF",
	
	automapMask:		"C0C0C0",
	automapPointer:		"#FF0000 #000000"
}

Theme2 = {
	formFontStyle:		"bold 16px 'Courier New' #404040",
	formElementBack:	"#FFFFE0",
	formTipColor:		"#FFFFE0",
	formTipStyle:		"normal 12px sans-serif black",
	
	boxFontStyle:		"normal 25px 'Myriad Pro' #f5f5f5",
	boxDimStyle:		"#000000 #808080",
	boxImageStyle:		"Images/TextInterfaceBlank.png",
	boxTagStyle:		"bold 25px 'Myriad Pro' white",
	boxMenuHilite:		"#c08040",
	
	balloonFillStyle:	"#000000 #808080",
	balloonStrokeStyle: "#FFFFFF",
	
	automapMask:		"C0C0C0",
	automapPointer:		"#FF0000 #000000"
}

Theme3 = {
	formFontStyle:		"bold 16px 'Courier New' #404040",
	formElementBack:	"#FFFFE0",
	formTipColor:		"#FFFFE0",
	formTipStyle:		"normal 12px sans-serif black",
	
	boxFontStyle:		"normal 25px 'Myriad Pro' #787878",
	boxDimStyle:		"#000000 #808080",
	boxImageStyle:		"Images/TextInterfaceBlank.png",
	boxTagStyle:		"bold 25px 'Myriad Pro' white",
	boxMenuHilite:		"#c08040",
	
	balloonFillStyle:	"#000000 #808080",
	balloonStrokeStyle: "#FFFFFF",
	
	automapMask:		"C0C0C0",
	automapPointer:		"#FF0000 #000000"
}

Theme4 = {
	formFontStyle:		"bold 16px 'Courier New' #404040",
	formElementBack:	"#FFFFE0",
	formTipColor:		"#FFFFE0",
	formTipStyle:		"normal 12px sans-serif black",
	
	boxFontStyle:		"normal 20px 'Myriad Pro' #f5f5f5",
	boxDimStyle:		"#000000 #808080",
	boxImageStyle:		"Images/TextTemplate2.png",
	boxTagStyle:		"bold 25px 'Myriad Pro' white",
	boxMenuHilite:		"#c08040",
	
	balloonFillStyle:	"#000000 #808080",
	balloonStrokeStyle: "#FFFFFF",
	
	automapMask:		"C0C0C0",
	automapPointer:		"#FF0000 #000000"
}

Config = {
	// Themes
	themeList:			["Title", Theme1,
							"For_Text_Speech", Theme2,
							"For_Text_Thoughts", Theme3,
							"For_Menu_Options", Theme4],
	activeTheme:		Theme1,

	// Volume
	volumeAudio:		0.9,
	volumeVideo:		0.9,
	
	// Script Box
	boxWidth:			1,
	boxHeight:			.35,
	boxFullHeight:		1,
	boxScrollSpeed:		1.0,
	balloonWidth:		0.5,
	balloonHeight:		0.2,

	// Actors
	actorShowAvatar:	true,
	actorPerspective:	false,
	actorYPosition:		1.0,

	// Audio
	audioFormat:		["mp3", "ogg"],

	// Movie
	movieSize:			0.75,
	movieOnCanvas:		true,
	movieFormat:		["mp4", "ogv"],
	
	// Transitions
	transTime:			1.0,
	
	// Gameplay
	gameMatureFilter:	true,
	gameBadWords:		["fuck", "wank", "shit", "pussy", "cunt", "dick"],
	gameAltWord:		"****",
	gameAllowMacro:		true,
	gameAllowPreload:	true,
	gameNamedCheckpts:	false,
	gameAllowLookAhead: true,
}

