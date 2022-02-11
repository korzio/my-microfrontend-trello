import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import '@kor-ui/kor';

export class AppBoard extends LitElement {
  @property({ type: Number }) columns = 3;

  static styles = css``;

  myFunction() {
    this.columns += 1;
  }

  render() {
    return html`
      <kor-page>
        ${new Array(this.columns)
          .fill(null)
          .map(
            (val, idx) =>
              html`<kor-card>${idx + 1}</kor-card>
                <kor-divider orientation="vertical"></kor-divider>`
          )}

        <kor-button
          label="+"
          color="primary"
          @click="${this.myFunction}"
        ></kor-button>
      </kor-page>
    `;
  }
}
