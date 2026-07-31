/**
 * Jest stub for the managed-package cpm/flowFieldSet wrapper. The real component ships in the
 * PaymentHub package and isn't resolvable in unit tests, so we provide a minimal LWC that renders
 * its slotted content.
 */
import { api, LightningElement } from 'lwc';

export default class FlowFieldSet extends LightningElement {
    @api label;
    @api description;
}
