let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let numb = document.getElementById("num");

document.getElementById("minusBurger").addEventListener("click", () => {
  let numb = document.getElementById("numBurger");
  if (numb.value <= 0) {
    numb.value = "0";
  } else {
    numb.value--;
  }
  document.getElementById("totalBurger").innerHTML =
    document.getElementById("numBurger").value * 100;
});

document.getElementById("plusBurger").addEventListener("click", () => {
  let numb = document.getElementById("numBurger");
  if (numb.value >= 20) {
    numb.value = "20";
  } else {
    numb.value++;
  }
  document.getElementById("totalBurger").innerHTML =
    document.getElementById("numBurger").value * 100;
});

document.getElementById("minusPizza").addEventListener("click", () => {
  let numb = document.getElementById("numPizza");
  if (numb.value <= 0) {
    numb.value = "0";
  } else {
    numb.value--;
  }
  document.getElementById("totalPizza").innerHTML =
    document.getElementById("numPizza").value * 250;
});

document.getElementById("plusPizza").addEventListener("click", () => {
  let numb = document.getElementById("numPizza");
  if (numb.value >= 20) {
    numb.value = "20";
  } else {
    numb.value++;
  }
  document.getElementById("totalPizza").innerHTML =
    document.getElementById("numPizza").value * 250;
});
document.getElementById("minusFries").addEventListener("click", () => {
  let numb = document.getElementById("numFries");
  if (numb.value <= 0) {
    numb.value = "0";
  } else {
    numb.value--;
  }
  document.getElementById("totalFries").innerHTML =
    document.getElementById("numFries").value * 50;
});

document.getElementById("plusFries").addEventListener("click", () => {
  let numb = document.getElementById("numFries");
  if (numb.value >= 20) {
    numb.value = "20";
  } else {
    numb.value++;
  }
  document.getElementById("totalFries").innerHTML =
    document.getElementById("numFries").value * 50;
});
document.getElementById("minusCoke").addEventListener("click", () => {
  let numb = document.getElementById("numCoke");
  if (numb.value <= 0) {
    numb.value = "0";
  } else {
    numb.value--;
  }
  document.getElementById("totalCoke").innerHTML =
    document.getElementById("numCoke").value * 30;
});

document.getElementById("plusCoke").addEventListener("click", () => {
  let numb = document.getElementById("numCoke");
  if (numb.value >= 20) {
    numb.value = "20";
  } else {
    numb.value++;
  }
  document.getElementById("totalCoke").innerHTML =
    document.getElementById("numCoke").value * 30;
});

document.getElementById("minusBrownie").addEventListener("click", () => {
  let numb = document.getElementById("numBrownie");
  if (numb.value <= 0) {
    numb.value = "0";
  } else {
    numb.value--;
  }
  document.getElementById("totalBrownie").innerHTML =
    document.getElementById("numBrownie").value * 75;
});

document.getElementById("plusBrownie").addEventListener("click", () => {
  let numb = document.getElementById("numBrownie");
  if (numb.value >= 20) {
    numb.value = "20";
  } else {
    numb.value++;
  }
  document.getElementById("totalBrownie").innerHTML =
    document.getElementById("numBrownie").value * 75;
});
document.getElementById("minusBurger").addEventListener("click", () => {
  document.getElementById("total-number").innerHTML =
    Number(document.getElementById("totalBurger").innerHTML) +
    Number(document.getElementById("totalPizza").innerHTML) +
    Number(document.getElementById("totalFries").innerHTML) +
    Number(document.getElementById("totalCoke").innerHTML) +
    Number(document.getElementById("totalBrownie").innerHTML);
});
document.getElementById("plusBurger").addEventListener("click", () => {
  document.getElementById("total-number").innerHTML =
    Number(document.getElementById("totalBurger").innerHTML) +
    Number(document.getElementById("totalPizza").innerHTML) +
    Number(document.getElementById("totalFries").innerHTML) +
    Number(document.getElementById("totalCoke").innerHTML) +
    Number(document.getElementById("totalBrownie").innerHTML);
});

document.getElementById("minusPizza").addEventListener("click", () => {
  document.getElementById("total-number").innerHTML =
    Number(document.getElementById("totalBurger").innerHTML) +
    Number(document.getElementById("totalPizza").innerHTML) +
    Number(document.getElementById("totalFries").innerHTML) +
    Number(document.getElementById("totalCoke").innerHTML) +
    Number(document.getElementById("totalBrownie").innerHTML);
});
document.getElementById("plusPizza").addEventListener("click", () => {
  document.getElementById("total-number").innerHTML =
    Number(document.getElementById("totalBurger").innerHTML) +
    Number(document.getElementById("totalPizza").innerHTML) +
    Number(document.getElementById("totalFries").innerHTML) +
    Number(document.getElementById("totalCoke").innerHTML) +
    Number(document.getElementById("totalBrownie").innerHTML);
});

document.getElementById("minusFries").addEventListener("click", () => {
  document.getElementById("total-number").innerHTML =
    Number(document.getElementById("totalBurger").innerHTML) +
    Number(document.getElementById("totalPizza").innerHTML) +
    Number(document.getElementById("totalFries").innerHTML) +
    Number(document.getElementById("totalCoke").innerHTML) +
    Number(document.getElementById("totalBrownie").innerHTML);
});
document.getElementById("plusFries").addEventListener("click", () => {
  document.getElementById("total-number").innerHTML =
    Number(document.getElementById("totalBurger").innerHTML) +
    Number(document.getElementById("totalPizza").innerHTML) +
    Number(document.getElementById("totalFries").innerHTML) +
    Number(document.getElementById("totalCoke").innerHTML) +
    Number(document.getElementById("totalBrownie").innerHTML);
});
document.getElementById("minusCoke").addEventListener("click", () => {
  document.getElementById("total-number").innerHTML =
    Number(document.getElementById("totalBurger").innerHTML) +
    Number(document.getElementById("totalPizza").innerHTML) +
    Number(document.getElementById("totalFries").innerHTML) +
    Number(document.getElementById("totalCoke").innerHTML) +
    Number(document.getElementById("totalBrownie").innerHTML);
});
document.getElementById("plusCoke").addEventListener("click", () => {
  document.getElementById("total-number").innerHTML =
    Number(document.getElementById("totalBurger").innerHTML) +
    Number(document.getElementById("totalPizza").innerHTML) +
    Number(document.getElementById("totalFries").innerHTML) +
    Number(document.getElementById("totalCoke").innerHTML) +
    Number(document.getElementById("totalBrownie").innerHTML);
});
document.getElementById("minusBrownie").addEventListener("click", () => {
  document.getElementById("total-number").innerHTML =
    Number(document.getElementById("totalBurger").innerHTML) +
    Number(document.getElementById("totalPizza").innerHTML) +
    Number(document.getElementById("totalFries").innerHTML) +
    Number(document.getElementById("totalCoke").innerHTML) +
    Number(document.getElementById("totalBrownie").innerHTML);
});

document.getElementById("plusBrownie").addEventListener("click", () => {
  document.getElementById("total-number").innerHTML =
    Number(document.getElementById("totalBurger").innerHTML) +
    Number(document.getElementById("totalPizza").innerHTML) +
    Number(document.getElementById("totalFries").innerHTML) +
    Number(document.getElementById("totalCoke").innerHTML) +
    Number(document.getElementById("totalBrownie").innerHTML);
});
document.getElementById("minusBurger").addEventListener("click", () => {
  document.getElementById("tax").innerHTML =
    0.1 * document.getElementById("total-number").innerHTML;
});

document.getElementById("plusBurger").addEventListener("click", () => {
  document.getElementById("tax").innerHTML =
    0.1 * document.getElementById("total-number").innerHTML;
});
document.getElementById("minusPizza").addEventListener("click", () => {
    document.getElementById("tax").innerHTML =
      0.1 * document.getElementById("total-number").innerHTML;
  });
  
  document.getElementById("plusPizza").addEventListener("click", () => {
    document.getElementById("tax").innerHTML =
      0.1 * document.getElementById("total-number").innerHTML;
  });
  document.getElementById("minusFries").addEventListener("click", () => {
    document.getElementById("tax").innerHTML =
      0.1 * document.getElementById("total-number").innerHTML;
  });
  
  document.getElementById("plusFries").addEventListener("click", () => {
    document.getElementById("tax").innerHTML =
      0.1 * document.getElementById("total-number").innerHTML;
  });
  document.getElementById("minusCoke").addEventListener("click", () => {
    document.getElementById("tax").innerHTML =
      0.1 * document.getElementById("total-number").innerHTML;
  });
  
  document.getElementById("plusCoke").addEventListener("click", () => {
    document.getElementById("tax").innerHTML =
      0.1 * document.getElementById("total-number").innerHTML;
  });

  document.getElementById("minusBrownie").addEventListener("click", () => {
    document.getElementById("tax").innerHTML =
      0.1 * document.getElementById("total-number").innerHTML;
  });
  
  document.getElementById("plusBrownie").addEventListener("click", () => {
    document.getElementById("tax").innerHTML =
      0.1 * document.getElementById("total-number").innerHTML;
  });

document.getElementById("minusBurger").addEventListener("click", () => {
    document.getElementById("final-bill").innerHTML = Number(document.getElementById("tax").innerHTML) + Number(document.getElementById("total-number").innerHTML);
  });

  document.getElementById("plusBurger").addEventListener("click", () => {
    document.getElementById("final-bill").innerHTML = Number(document.getElementById("tax").innerHTML) + Number(document.getElementById("total-number").innerHTML);
  });

  document.getElementById("minusPizza").addEventListener("click", () => {
    document.getElementById("final-bill").innerHTML = Number(document.getElementById("tax").innerHTML) + Number(document.getElementById("total-number").innerHTML);
  });

  document.getElementById("plusPizza").addEventListener("click", () => {
    document.getElementById("final-bill").innerHTML = Number(document.getElementById("tax").innerHTML) + Number(document.getElementById("total-number").innerHTML);
  });

  document.getElementById("minusFries").addEventListener("click", () => {
    document.getElementById("final-bill").innerHTML = Number(document.getElementById("tax").innerHTML) + Number(document.getElementById("total-number").innerHTML);
  });

  document.getElementById("plusFries").addEventListener("click", () => {
    document.getElementById("final-bill").innerHTML = Number(document.getElementById("tax").innerHTML) + Number(document.getElementById("total-number").innerHTML);
  });

  document.getElementById("minusCoke").addEventListener("click", () => {
    document.getElementById("final-bill").innerHTML = Number(document.getElementById("tax").innerHTML) + Number(document.getElementById("total-number").innerHTML);
  });

  document.getElementById("plusCoke").addEventListener("click", () => {
    document.getElementById("final-bill").innerHTML = Number(document.getElementById("tax").innerHTML) + Number(document.getElementById("total-number").innerHTML);
  });

  document.getElementById("minusBrownie").addEventListener("click", () => {
    document.getElementById("final-bill").innerHTML = Number(document.getElementById("tax").innerHTML) + Number(document.getElementById("total-number").innerHTML);
  });

  document.getElementById("plusBrownie").addEventListener("click", () => {
    document.getElementById("final-bill").innerHTML = Number(document.getElementById("tax").innerHTML) + Number(document.getElementById("total-number").innerHTML);
  });

