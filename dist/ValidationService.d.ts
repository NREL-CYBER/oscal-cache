import Validator from "validator";
import { Party, Role, InventoryItem, Component, SystemSecurityPlan, AuthorizationBoundary, Resource, SystemCharacteristics } from 'oscal';
declare class OscalValidationService {
    private static _instance;
    party: Validator<Party>;
    role: Validator<Role>;
    inventory_item: Validator<InventoryItem>;
    component: Validator<Component>;
    ssp: Validator<SystemSecurityPlan>;
    authorization_boundary: Validator<AuthorizationBoundary>;
    resource: Validator<Resource>;
    system_characteristics: Validator<SystemCharacteristics>;
    private constructor();
    static validate(): OscalValidationService;
}
export default OscalValidationService;
