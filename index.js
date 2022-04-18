class Slider {
  constructor(rangeElement, valueElement, options, valueElement2, switcher) {
    this.rangeElement = rangeElement;
    this.valueElement = valueElement;
    this.options = options;
    this.valueElement2 = valueElement2;
    this.switcher = switcher;

    this.rangeElement.addEventListener("input", this.updateSlider.bind(this));
  }
  init() {
    this.rangeElement.setAttribute("min", options.min);
    this.rangeElement.setAttribute("max", options.max);
    this.rangeElement.value = options.cur;
    this.updateSlider();
  }

  asMoney(value) {
    if (switcher.checked) {
      switch (value) {
        case "1":
          return "$" + (8 * 3) / 4 + ".00";
          break;
        case "2":
          return "$" + (12 * 3) / 4 + ".00";
          break;
        case "3":
          return "$" + (16 * 3) / 4 + ".00";
          break;
        case "4":
          return "$" + (24 * 3) / 4 + ".00";
          break;
        case "5":
          return "$" + (36 * 3) / 4 + ".00";
          break;
        default:
          return "$0";
      }
    } else {
      switch (value) {
        case "1":
          return "$8.00";
          break;
        case "2":
          return "$12.00";
          break;
        case "3":
          return "$16.00";
          break;
        case "4":
          return "$24.00";
          break;
        case "5":
          return "$36.00";
          break;
        default:
          return "$0";
      }
    }
  }

  asPageview(value) {
    switch (value) {
      case "1":
        return "10K";
        break;
      case "2":
        return "50K";
        break;
      case "3":
        return "100K";
        break;
      case "4":
        return "500K";
        break;
      case "5":
        return "1M";
        break;
      default:
        break;
    }
  }
  generateBackground(rangeElement) {
    if (this.rangeElement.value === this.options.min) {
      return;
    }
    let percentage =
      ((this.rangeElement.value - this.options.min) /
        (this.options.max - this.options.min)) *
      100;
    return (
      "background: linear-gradient(to right, hsl(174, 77%, 80%) " +
      percentage +
      "%, hsl(224, 65%, 95%) " +
      percentage +
      "%, hsl(224, 65%, 95%) 100%)"
    );
  }
  updateSlider(newValue) {
    this.valueElement.innerHTML = this.asMoney(this.rangeElement.value);
    this.valueElement2.innerHTML = this.asPageview(this.rangeElement.value);
    this.rangeElement.style = this.generateBackground(this.rangeElement.value);
  }
}

let rangeElement = document.getElementById("slider");
let valueElement = document.getElementById("money-amount");
let valueElement2 = document.getElementById("pageview-amount");
let options = {
  min: 1,
  max: 5,
  cur: 3,
};
let switcher = document.getElementById("switch");

switcher.onclick = () => {
  if (switcher.checked) {
    switch (rangeElement.value) {
      case "1":
        valueElement.innerHTML = "$" + (8 * 3) / 4 + ".00";
        break;
      case "2":
        valueElement.innerHTML = "$" + (12 * 3) / 4 + ".00";
        break;
      case "3":
        valueElement.innerHTML = "$" + (16 * 3) / 4 + ".00";
        break;
      case "4":
        valueElement.innerHTML = "$" + (24 * 3) / 4 + ".00";
        break;
      case "5":
        valueElement.innerHTML = "$" + (36 * 3) / 4 + ".00";
        break;
      default:
        valueElement.innerHTML = "$0";
    }
  } else {
    switch (rangeElement.value) {
      case "1":
        valueElement.innerHTML = "$8.00";
        break;
      case "2":
        valueElement.innerHTML = "$12.00";
        break;
      case "3":
        valueElement.innerHTML = "$16.00";
        break;
      case "4":
        valueElement.innerHTML = "$24.00";
        break;
      case "5":
        valueElement.innerHTML = "$36.00";
        break;
      default:
        valueElement.innerHTML = "$0";
    }
  }
};

if (rangeElement) {
  let slider = new Slider(
    rangeElement,
    valueElement,
    options,
    valueElement2,
    switcher
  );

  slider.init();
}
