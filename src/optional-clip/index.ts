import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from 'lit/directives/style-map.js';

@customElement("optional-clip")
export class OptionalClip extends LitElement {
  /** clip horizontally */
  @property({ type: Boolean })
  public x?: boolean;

  /** clip vertically */
  @property({ type: Boolean })
  public y?: boolean;

  /** clip left， will  */
  @property({ type: Boolean })
  public left?: boolean;

  /** clip right */
  @property({ type: Boolean })
  public right?: boolean;

  /** clip top */
  @property({ type: Boolean })
  public top?: boolean;

  /** clip bottom */
  @property({ type: Boolean })
  public bottom?: boolean;

  get clipLeft() {
    return this.left ?? this.x ?? false;
  }
  get clipRight() {
    return this.right ?? this.x ?? false;
  }
  get clipTop() {
    return this.top ?? this.y ?? false;
  }
  get clipBottom() {
    return this.bottom ?? this.y ?? false;
  }

  get clipStyle(): any {
    const { clipLeft, clipRight, clipTop, clipBottom } = this;
    const distance = "100000px";
    return styleMap({
      width: `calc(100% + ${clipLeft ? "0px" : distance} + ${
        clipRight ? "0px" : distance
      })`,
      height: `calc(100% + ${clipTop ? "0px" : distance} + ${
        clipBottom ? "0px" : distance
      })`,
      paddingLeft: clipLeft ? "0" : `${distance}`,
      left: clipLeft ? "0" : `-${distance}`,
      paddingRight: clipRight ? "0" : `${distance}`,
      paddingTop: clipTop ? "0" : `${distance}`,
      top: clipTop ? "0" : `-${distance}`,
      paddingBottom: clipBottom ? "0" : `${distance}`,
    });
  }

  override render() {
    return html`
      <div class="optional-clip" style=${this.clipStyle}>
        <div class="optional-clip__content">
          <slot></slot>
        </div>
      </div>
    `;
  }

  static override styles = [
    css`
      :host {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
      }
      .optional-clip {
        position: absolute;
        overflow: clip;
        pointer-events: none;
        box-sizing: border-box;
      }
      .optional-clip__content {
        pointer-events: auto;
        width: 100%;
        height: 100%;
        position: relative;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "optional-clip": OptionalClip;
  }
}
