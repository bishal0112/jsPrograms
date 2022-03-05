// // Login security system

// let generateHash = () => {
// 	const hashCodes = [
// 		"a",
// 		"b",
// 		"c",
// 		"d",
// 		"e",
// 		"f",
// 		"g",
// 		"h",
// 		"i",
// 		"j",
// 		"k",
// 		"l",
// 		"m",
// 		"n",
// 		"o",
// 		"p",
// 		"q",
// 		"r",
// 		"s",
// 		"t",
// 		"u",
// 		"v",
// 		"w",
// 		"x",
// 		"y",
// 		"z",
// 		"0",
// 		"1",
// 		"2",
// 		"3",
// 		"4",
// 		"5",
// 		"6",
// 		"7",
// 		"8",
// 		"9",
// 	];
// 	let hashStr = "";

// 	for (let i = 1; i <= 16; i++) {
// 		let randomCode = Math.floor(Math.random() * hashCodes.length);
// 		hashStr = hashStr + hashCodes[randomCode];
// 	}
// 	return hashStr;
// };

// const userDB = {
// 	userName: [],
// 	password: [],

// 	set secureName(e) {
// 		this.userName.push(`${generateHash()}${e}`);
// 	},
// };

// let userArray = ["bishal", "knight", "raja", "adhikari", "momos", "light"];

// userArray.forEach(function (val) {
// 	userDB.secureName = val;
// });

// userDB.userName.forEach(function (i) {
// 	console.log(i);
// });
