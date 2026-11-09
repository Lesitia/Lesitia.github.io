const ko = {
    main: {
        introduction: {
            first: "이 사이트는",
            second: "의 공식 사이트입니다.",
            description: "이 곳에서 저의 곡에 대한 정보를 확인할 수 있습니다.",
        },

        bio: {
            greeting: {
            	prefix: "안녕하세요,",
				suffix: "입니다.",
			},
			description: {
				fromstart: {
					prefix: "작곡을 시작한 지 ",
					suffix: ""
				},
				line1: "저는 2020년 2월부터 작곡을 시작한 7년차 작곡가입니다.",
				line2: "주로 작곡하는 장르는 Hardcore, Speedcore 등이 있으며, 변속을 자주 사용하는 편입니다.",
				line3_1: "저의 곡에 대한 사용 범위는",
				line3_2: "페이지를 참고해주시길 바랍니다.",
			}
        },

        links: {
            youtube: "YouTube",
            discord: "Discord 서버",
            discordName: "Lesitia's Celestial",
        },
	},
	discography: {
		totalDiscography: "전체 Discography에 수록된 곡 수",
		totalSingle: "전체 싱글 앨범 수",
		totalCompilation: "참여한 컴필레이션 수",
		latestSingle: "최근 발매한 싱글",
		latestCompilation: "최근 참여한 컴필레이션"
	},
	guideline: {
		href: "https://docs.google.com/document/d/1zy1OZqWqlsS1h5bXxpfuvSXlKOAs77WYCZ-u1ZrSMZg/",
		hrefname: "문서 전문",
		disclaimer: {
			main: "이 페이지의 내용은 간략화된 버전입니다.",
			sub: {
				prefix: "전체 가이드라인 내용은 ",
				suffix: "을 참고하시길 바랍니다."
			},
			sub2: "이 문서의 내용은 언제든지 변경될 수 있습니다.",
		},
		main: {
			name: "전반",
			audio: {
				name: "오디오",
				description: "각 음원의 비트레이트는 최대 128kbps로 제한됩니다.",
				ignore: "예외 사항: 해당 곡이 커미션, 대회 등의 이유로 제공될 경우.",
				moreInfo: {
					prefix: "더 자세한 정보는 ",
					suffix: "을 참고하시길 바랍니다."
				}
			}
		},
		restriction: {
			name: "제한 사항",
			general: {
				name: "전반",
				desc1: "\"Lesitia.\"가 전권을 가지고 있으나 목록에 \"X\"로 표기된 경우",
				desc2: "곡이 공동 작업물이어서 \"Lesitia.\"가 전권을 가지고 있지 않은 경우",
				desc2_1: "중 참여 인원 중 1명 이상이 불허 의사를 밝힌 경우",
				desc3: "해당 곡을 사용하실 수 없습니다.",
			},
			audio: {
				name: "오디오",
				desc1: "사용된 음원의 비트레이트가 128kbps 이상인 경우",
				desc2: "\"Lesitia.\"는 해당 음원의 비트레이트를 128kbps로 낮추거나",
				desc3: "또는 해당 음원의 삭제 요청을 할 수 있습니다.",
			},
			moreInfo: {
				prefix: "목록에 \"O\"나 \"X\" 또는 \"/\" (일부 허가) 로 표기되어있지 않은 경우,",
				suffix: "을 참고하시길 바랍니다."
			},
		}
	},
};

export default ko;