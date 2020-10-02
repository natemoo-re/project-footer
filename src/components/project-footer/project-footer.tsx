import { Component, h, Prop } from "@stencil/core";
import { Heart, Github } from "./icons";

@Component({
  tag: 'project-footer',
  styleUrl: 'project-footer.css',
  shadow: true,
})
export class Footer {
  @Prop() repo: string;
  @Prop() license: string = 'MIT';

  render() {
    return (
      <footer>
        <div class="container">
          <p>
            Built with <Heart /> by <a href="https://twitter.com/n_moore">Nate Moore</a>
          </p>
          <p class="license">
            <span>© {new Date().getFullYear()}</span>
            <span class="separator">/</span>
            <span>
              Released under {this.license} License
            </span>
            {this.repo && <span class="separator">/</span>}
            {this.repo && (
              <a href={`https://github.com/natemoo-re/${this.repo}`}>
                <Github />
              </a>
            )}
          </p>
        </div>
      </footer>
    );
  }
}
