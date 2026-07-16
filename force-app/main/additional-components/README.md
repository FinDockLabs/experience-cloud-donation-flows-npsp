# Experience Cloud Additional Components

This repository contains custom **Lightning Web Components (LWC)** and **Custom Labels** for FinDock Experience Cloud flows.

## Files and folders in this repo

```text
.
├── README.md
├── labels/
│   └── CustomLabels.labels-meta.xml
└── lwc/
    ├── tsconfig.json
    ├── amountAndFrequency/
    ├── amountAndFrequencyConfig/
    └── experienceProgressStages/
```

## Root

- `README.md`  
  Documentation for this project.

## `labels/`

- `labels/CustomLabels.labels-meta.xml`  
  Contains Salesforce Custom Labels used by the LWC components (UI text, validation messages, and accessibility text).

## `lwc/`

- `lwc/tsconfig.json`  
  TypeScript/JS tooling configuration for LWC development.

### `lwc/amountAndFrequency/`

Main donation amount and frequency selector component.

- `amountAndFrequency.html` - Component template/markup
- `amountAndFrequency.js` - Component logic, Flow output values, validation, query param + session state handling
- `amountAndFrequency.css` - Component styling
- `amountAndFrequency.js-meta.xml` - Salesforce metadata (targets/exposure)
- `amountAndFrequencyLabels.js` - Label imports used by this component
- `__tests__/amountAndFrequency.a11y.test.js` - Accessibility test

### `lwc/amountAndFrequencyConfig/`

Flow Builder custom property editor for configuring the amount/frequency component.

- `amountAndFrequencyConfig.html` - Config editor UI
- `amountAndFrequencyConfig.js` - Config logic, input variable hydration, and emitted Flow config values
- `amountAndFrequencyConfig.css` - Config editor styling
- `amountAndFrequencyConfig.js-meta.xml` - Salesforce metadata for property editor exposure

### `lwc/experienceProgressStages/`

Progress indicator component for multi-step Experience Cloud flows.

- `experienceProgressStages.html` - Component template/markup
- `experienceProgressStages.js` - Stage logic, active/completed state classes, and screen-reader announcement updates
- `experienceProgressStages.css` - Component styling
- `experienceProgressStages.js-meta.xml` - Salesforce metadata (targets/exposure)
- `experienceProgressStagesLabels.js` - Label imports used by this component
- `__tests__/experienceProgressStages.a11y.test.js` - Accessibility test
