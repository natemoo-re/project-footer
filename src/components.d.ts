/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ProjectFooter {
        "license": string;
        "repo": string;
    }
}
declare global {
    interface HTMLProjectFooterElement extends Components.ProjectFooter, HTMLStencilElement {
    }
    var HTMLProjectFooterElement: {
        prototype: HTMLProjectFooterElement;
        new (): HTMLProjectFooterElement;
    };
    interface HTMLElementTagNameMap {
        "project-footer": HTMLProjectFooterElement;
    }
}
declare namespace LocalJSX {
    interface ProjectFooter {
        "license"?: string;
        "repo"?: string;
    }
    interface IntrinsicElements {
        "project-footer": ProjectFooter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "project-footer": LocalJSX.ProjectFooter & JSXBase.HTMLAttributes<HTMLProjectFooterElement>;
        }
    }
}
