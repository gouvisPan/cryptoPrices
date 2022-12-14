import icons from "../../img/icons.svg";

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._parentEl.innerHTML = "";
  }

  renderError() {
    const markup = `<div class="error">
                      <p>${this._errorMessage}</p>
                    </div>`;

    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup = `<div class="spinner">
                    <svg>
                    <use href="${icons}#icon-loader"></use>
                    </svg>
                    </div>`;

    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}
