import { oscal_xml_ssp } from "./oscal_leveraged-example_ssp"
import {xmlToJson } from "../../src/commands/shared/xmlToJson";
import oscal from "../../src/";
import 'regenerator-runtime/runtime';

test("Validates that a valid ssp can be converted to json", async () => {
	const validator = await oscal.ssp.getState().lazyLoadValidator();
	let json = xmlToJson(oscal_xml_ssp, true, 4)
    expect(Object.keys(json["system-security-plan"]["metadata"]).length).toBe(6)
    expect(json["system-security-plan"]["metadata"]["role"].length).toBe(3)
    expect(Object.keys(json["system-security-plan"]["metadata"]["role"][1])).toStrictEqual(["id", "title"])
})
