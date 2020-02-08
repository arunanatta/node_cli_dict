#!/usr/bin/env node

const wordnik = require("./wordnik.js")
const async = require("async")

//get the entered dictionary command
if(process.argv[2] === 'def'){
	if(process.argv[3]){
		wordnik.getDefinition(process.argv[3],(err,res)=>{
			if(err){
				console.log(err)
			}
			console.log("\nDefinition : ",res)
		})
	}else{
		console.log("\nInvalid command!!", "\nSyntax : $ dict def <word>")
	}
}else if(process.argv[2] === "syn"){
	if(process.argv[3]){
		wordnik.getSynonym(process.argv[3],(err,res)=>{
			if(err){
				console.log(err)
			}else if(typeof(res) === 'string'){
				console.log("\n",res)
			}else{
				console.log("\nSynonyms : ")
				for(let synonym of res){
					console.log("\n",synonym)
				}
			}
		
		})
	}else{
		console.log("Invalid command!!", "\nSyntax : $ dict syn <word>")
	}
}else if(process.argv[2] === "ant"){
	if(process.argv[3]){
		wordnik.getAntonym(process.argv[3],(err,res)=>{
			if(err){
				console.log(err)
			}else if(typeof(res) === 'string'){
				console.log("\n",res)
			}else{
				console.log("\nAntonyms : ")
				for(let antonym of res){
					console.log("\n",antonym)
				}
			}
		})
	}else{
		console.log("Invalid command!!", "\nSyntax : $ dict ant <word>")
	}
}else if(process.argv[2] === "ex"){
	if(process.argv[3]){
		wordnik.getExample(process.argv[3],(err,res)=>{
			if(err){
				console.log(err)
			}else if(typeof(res) === 'string'){
				console.log("\n",res)
			}else{
				console.log("\nExamples : ")
				for(let example of res){
					console.log("\n",example.text)
				}
			}
		})
	}else{
		console.log("Invalid command!!", "\nSyntax : $ dict ex <word>")
	}
}else if(process.argv[2] === "dict"){
	if(process.argv[3]){
		async.parallel([
			(callback)=>{ wordnik.getDefinition(process.argv[3],callback)},
			(callback)=>{ wordnik.getSynonym(process.argv[3],callback)},
			(callback)=>{ wordnik.getAntonym(process.argv[3],callback)},
			(callback)=>{ wordnik.getExample(process.argv[3],callback)},
		],(err,data)=>{
			if(err){
				console.log("Unable to get the data")
			}else{
			  	console.log("\nDefinition : ",data[0])

			  	console.log("\nSynonyms : ")
				for(let synonym of data[1]){
					console.log("\n",synonym)
				}

				console.log("\nAntonyms : ")
				for(let antonym of data[2]){
					console.log("\n",antonym)
				}

				console.log("\nExamples : ")
				for(let example of data[3]){
					console.log("\n",example.text)
				}
			}
		})
	}else{
		console.log("Invalid command!!", "\nSyntax : $ dict dict <word>")
	}
}else{
	console.log("Invalid command!!")
	console.log("Syntaxes : ")
	console.log("$ dict def <word>    // to get Definition of a word")
	console.log("$ dict syn <word>    // to get Synonyms of a word")
	console.log("$ dict ant <word>    // to get Antonyms of a word")
	console.log("$ dict ex <word>     // to get Examples of a word")
	console.log("$ dict dict <word>   // to get Definition,Synonyms,Antonyms and Examples of a word")
}