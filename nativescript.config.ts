import { NativeScriptConfig } from "@nativescript/core";

export default {
    id: "org.nativescript.ngsample",
    appResourcesPath: "App_Resources",
    android: {
        v8Flags: "--expose_gc",
        markingMode: "none",
    },
    appPath: "src",
    nsext: ".tns",
    webext: "",
    shared: true,
    useLegacyWorkflow: false,
} as NativeScriptConfig;
