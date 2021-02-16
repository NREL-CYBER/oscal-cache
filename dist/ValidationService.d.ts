import Validator from "validator";
import { Party, Role, InventoryItem, Component, SystemSecurityPlan, AuthorizationBoundary, Resource } from 'oscal';
declare class ValidationService {
    private static _instance;
    party: Validator<Party>;
    role: Validator<Role>;
    inventory_item: Validator<InventoryItem>;
    component: Validator<Component>;
    ssp: Validator<SystemSecurityPlan>;
    authorization_boundary: Validator<AuthorizationBoundary>;
    resource: Validator<Resource>;
    private constructor();
    static validate(): ValidationService;
}
export default ValidationService;
