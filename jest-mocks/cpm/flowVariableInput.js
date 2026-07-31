/**
 * Jest stub for the managed-package cpm/flowVariableInput. The real component ships in the
 * PaymentHub package and isn't resolvable in unit tests, so we provide a minimal LWC that exposes
 * the public API used by the config editor and can re-emit a value change.
 */
import { api, LightningElement } from 'lwc';

export default class FlowVariableInput extends LightningElement {
    @api name;
    @api label;
    @api variant;
    @api builderContextFilterType;
    @api value;
    @api valueType;
    @api builderContext;
    @api automaticOutputVariables;
}
