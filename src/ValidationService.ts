import Validator from "validator";
import { Party, Role, InventoryItem, Component, SystemSecurityPlan, AuthorizationBoundary, Diagram, Resource, SystemCharacteristics } from 'oscal';
import ssp_schema from "oscal/schemas/oscal_ssp_schema.json"

class OscalValidationService {
    private static _instance: OscalValidationService;

    party: Validator<Party>;
    role: Validator<Role>;
    inventory_item: Validator<InventoryItem>;
    component: Validator<Component>;
    ssp: Validator<SystemSecurityPlan>;
    authorization_boundary: Validator<AuthorizationBoundary>;
    resource: Validator<Resource>;
    system_characteristics: Validator<SystemCharacteristics>;

    private constructor() {
        this.ssp = new Validator<SystemSecurityPlan>(ssp_schema, "system_security_plan")
        this.party = this.ssp.makeReferenceValidator({ $ref: "#/party" })
        this.role = this.ssp.makeReferenceValidator({ $ref: "#/role" });
        this.inventory_item = this.ssp.makeReferenceValidator({ $ref: "#/inventory_item" });
        this.component = this.ssp.makeReferenceValidator({ $ref: "#/system_component" });
        this.authorization_boundary = this.ssp.makeReferenceValidator({ $ref: "#/authorization_boundary" });
        this.system_characteristics = this.ssp.makeReferenceValidator({ $ref: "#/system_characteristics" });
        this.resource = this.ssp.makeReferenceValidator({ $ref: "#/resource" });
    }

    public static validate() {
        return this._instance || (this._instance = new this());
    }
}
export default OscalValidationService;