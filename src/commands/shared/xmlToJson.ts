import parser from "fast-xml-parser"

export const xmlToJson =  (xml: string, compact: boolean, spaces: number) => {
	const options = {
		attributeNamePrefix : "",
		// attrNodeName: "false", //default is 'false'
		// textNodeName : "#text",
		ignoreAttributes : false,
		ignoreNameSpace : true,
		allowBooleanAttributes : false,
		parseNodeValue : true,
		parseAttributeValue : true,
		// trimValues: true,
		cdataTagName: "__cdata", //default is 'false'
		cdataPositionChar: "\\c",
		parseTrueNumberOnly: false,
		numParseOptions:{
			hex: true,
			leadingZeros: true,
		//skipLike: /\+[0-9]{10}/
		},
		arrayMode: false, //"strict"
		// attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
		// tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
		// stopNodes: ["parse-me-as-string"],
		alwaysCreateTextNode: false
	};
	let result = parser.parse(xml, options)
	return result;
}