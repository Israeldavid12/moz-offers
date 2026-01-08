// document.addEventListener("DOMContentLoaded", () => {
    // Pega a URL atual
    const url = window.location.pathname;
    console.log(url)

    // Verifica se estamos na página de produto
    if (!url.startsWith("/products/")) return; // se não for, não faz nada

    console.log("Botão Mpesa carregado!");

    const container = document.querySelector("form[action^='/cart/add']");
    if (!container) return;

    // Criar input para número
    const input_number = document.createElement("input");
    input_number.placeholder = "84XXXXXXX";
    input_number.style.cssText = "margin-bottom:10px;margin-top:10px;padding:14px;width:100%;box-sizing:border-box;border-radius:6px;border:1px solid #ccc;";

    // Criar botão Mpesa
    const btn = document.createElement("button");
    btn.innerText = "Pagar com Mpesa";
    btn.style.cssText = "padding:14px;background:green;color:white;border:none;border-radius:6px;cursor:pointer;font-weight:bold;width:100%";

    btn.onclick = (e) => {
        e.preventDefault();
        const phone = input_number.value.trim();
        if (!phone) return alert("Por favor, insira o número do Mpesa!");
        alert("Simulação de pagamento para: " + phone);
    };

    container.appendChild(input_number);
    container.appendChild(btn);
// });
